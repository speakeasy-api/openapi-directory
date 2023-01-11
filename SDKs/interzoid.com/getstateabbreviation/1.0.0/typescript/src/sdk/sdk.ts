import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { StateDataStandardization } from "./statedatastandardization";


export const ServerList = [
	"https://api.interzoid.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://www.interzoid.com/services/getstateabbreviation - API home page and documentation*/
export class SDK {
  public stateDataStandardization: StateDataStandardization;

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
    
    this.stateDataStandardization = new StateDataStandardization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}