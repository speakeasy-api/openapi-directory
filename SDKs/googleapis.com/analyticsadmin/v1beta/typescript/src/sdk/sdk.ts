import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountSummaries } from "./accountsummaries";
import { Accounts } from "./accounts";
import { Properties } from "./properties";


export const ServerList = [
	"https://analyticsadmin.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: http://code.google.com/apis/analytics/docs/mgmt/home.html*/
export class SDK {
  public accountSummaries: AccountSummaries;
  public accounts: Accounts;
  public properties: Properties;

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
    
    this.accountSummaries = new AccountSummaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.properties = new Properties(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}