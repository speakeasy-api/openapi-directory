import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Resources } from "./resources";


export const ServerList = [
	"http://api.open511.gov.bc.ca/",
	"https://api.open511.gov.bc.ca/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: http://api.open511.gov.bc.ca/help - Additional API Documentation*/
export class SDK {
  public resources: Resources;

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
    
    this.resources = new Resources(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}