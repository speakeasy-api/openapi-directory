import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { CaseClassifications } from "./caseclassifications";
import { Cases } from "./cases";
import { Media } from "./media";


export const ServerList = [
	"https://cloudsupport.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://cloud.google.com/support/docs/apis*/
export class SDK {
  public caseClassifications: CaseClassifications;
  public cases: Cases;
  public media: Media;

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
    
    this.caseClassifications = new CaseClassifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cases = new Cases(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.media = new Media(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}