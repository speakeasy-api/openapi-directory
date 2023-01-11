import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { VeteranConfirmationStatus } from "./veteranconfirmationstatus";


export const ServerList = [
	"https://sandbox-api.va.gov/services/veteran_confirmation/{version}",
	"https://api.va.gov/services/veteran_confirmation/{version}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public veteranConfirmationStatus: VeteranConfirmationStatus;

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
    
    this.veteranConfirmationStatus = new VeteranConfirmationStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}