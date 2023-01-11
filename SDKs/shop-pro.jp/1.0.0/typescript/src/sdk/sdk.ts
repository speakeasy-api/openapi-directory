import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ApplicationCharge } from "./applicationcharge";
import { InlineScript } from "./inlinescript";
import { Script } from "./script";
import { ScriptDeprecated } from "./scriptdeprecated";
import { Uninstallation } from "./uninstallation";


export const ServerList = [
	"https://api.shop-pro.jp",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public applicationCharge: ApplicationCharge;
  public inlineScript: InlineScript;
  public script: Script;
  public scriptDeprecated: ScriptDeprecated;
  public uninstallation: Uninstallation;

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
    
    this.applicationCharge = new ApplicationCharge(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.inlineScript = new InlineScript(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.script = new Script(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scriptDeprecated = new ScriptDeprecated(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uninstallation = new Uninstallation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}