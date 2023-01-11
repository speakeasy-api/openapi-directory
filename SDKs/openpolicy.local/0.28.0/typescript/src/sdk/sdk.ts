import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { CompileApi } from "./compileapi";
import { DataApi } from "./dataapi";
import { HealthApi } from "./healthapi";
import { PolicyApi } from "./policyapi";
import { QueryApi } from "./queryapi";


export const ServerList = [
	"http://openpolicy.local",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://www.openpolicyagent.org/docs/latest/ - OPA documentation*/
export class SDK {
  public compileAPI: CompileApi;
  public dataAPI: DataApi;
  public healthAPI: HealthApi;
  public policyAPI: PolicyApi;
  public queryAPI: QueryApi;

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
    
    this.compileAPI = new CompileApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataAPI = new DataApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.healthAPI = new HealthApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.policyAPI = new PolicyApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.queryAPI = new QueryApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}