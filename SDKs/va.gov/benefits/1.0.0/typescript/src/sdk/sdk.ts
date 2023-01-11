import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { VbaDocuments } from "./vbadocuments";


export const ServerList = [
	"https://sandbox-api.va.gov/services/vba_documents/{version}",
	"https://api.va.gov/services/vba_documents/{version}",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public vbaDocuments: VbaDocuments;

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
    
    this.vbaDocuments = new VbaDocuments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}