import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ApplicationDetailService } from "./applicationdetailservice";
import { Projects } from "./projects";
import { TestEnvironmentCatalog } from "./testenvironmentcatalog";


export const ServerList = [
	"https://testing.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/cloud-test-lab/*/
export class SDK {
  public applicationDetailService: ApplicationDetailService;
  public projects: Projects;
  public testEnvironmentCatalog: TestEnvironmentCatalog;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.applicationDetailService = new ApplicationDetailService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.projects = new Projects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testEnvironmentCatalog = new TestEnvironmentCatalog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}