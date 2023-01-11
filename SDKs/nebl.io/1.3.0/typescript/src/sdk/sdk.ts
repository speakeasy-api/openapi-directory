import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Insight } from "./insight";
import { JsonRpc } from "./jsonrpc";
import { Ntp1 } from "./ntp1";
import { TestnetFaucet } from "./testnetfaucet";
import { TestnetInsight } from "./testnetinsight";
import { TestnetNtp1 } from "./testnetntp1";


export const ServerList = [
	"https://ntp1node.nebl.io/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public insight: Insight;
  public jsonRPC: JsonRpc;
  public ntp1: Ntp1;
  public testnetFaucet: TestnetFaucet;
  public testnetInsight: TestnetInsight;
  public testnetNtp1: TestnetNtp1;

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
    
    this.insight = new Insight(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.jsonRPC = new JsonRpc(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ntp1 = new Ntp1(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testnetFaucet = new TestnetFaucet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testnetInsight = new TestnetInsight(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.testnetNtp1 = new TestnetNtp1(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}