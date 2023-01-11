import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountReports } from "./accountreports";
import { DetailedLeadReports } from "./detailedleadreports";


export const ServerList = [
	"https://localservices.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://ads.google.com/local-services-ads/*/
export class SDK {
  public accountReports: AccountReports;
  public detailedLeadReports: DetailedLeadReports;

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
    
    this.accountReports = new AccountReports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.detailedLeadReports = new DetailedLeadReports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}