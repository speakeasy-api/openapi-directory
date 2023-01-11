import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { KeysApi } from "./keysapi";
import { ProductsApi } from "./productsapi";
import { SubscriptionsApi } from "./subscriptionsapi";


export const ServerList = [
	"https://keyserv.solutions",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public keysApi: KeysApi;
  public productsApi: ProductsApi;
  public subscriptionsApi: SubscriptionsApi;

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
    
    this.keysApi = new KeysApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productsApi = new ProductsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptionsApi = new SubscriptionsApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}