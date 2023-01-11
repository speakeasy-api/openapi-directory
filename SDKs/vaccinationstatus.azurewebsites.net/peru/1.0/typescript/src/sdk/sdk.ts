import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { PeruApi } from "./peruapi";


export const ServerList = [
	"https://vaccinationstatus.azurewebsites.net//vaccinationstatus.azurewebsites.net/covid-vaccine-status/v1.0.0/peru/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public peruApi: PeruApi;

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
    
    this.peruApi = new PeruApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}