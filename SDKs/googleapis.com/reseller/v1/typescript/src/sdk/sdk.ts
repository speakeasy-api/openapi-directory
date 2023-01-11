import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Customers } from "./customers";
import { Resellernotify } from "./resellernotify";
import { Subscriptions } from "./subscriptions";


export const ServerList = [
	"https://reseller.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/google-apps/reseller/*/
export class SDK {
  public customers: Customers;
  public resellernotify: Resellernotify;
  public subscriptions: Subscriptions;

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
    
    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resellernotify = new Resellernotify(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptions = new Subscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}