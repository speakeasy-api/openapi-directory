import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { PatrowlEngine } from "./patrowlengine";


export const ServerList = [
	"http://patrowl.local",
	"http://localhost:5001/engines/nmap/",
	"http://localhost:5004/engines/ssllabs/",
	"http://localhost:5005/engines/arachni/",
	"http://localhost:5006/engines/owl_dns/",
	"http://localhost:5007/engines/virustotal/",
	"http://localhost:5008/engines/urlvoid/",
	"http://localhost:5009/engines/cortex/",
	"http://localhost:5012/engines/owl_leaks/",
	"http://localhost:5013/engines/owl_code/",
	"http://localhost:5014/engines/sslscan/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl*/
export class SDK {
  public patrowlEngine: PatrowlEngine;

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
    
    this.patrowlEngine = new PatrowlEngine(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}