import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Account } from "./account";
import { Application } from "./application";
import { FacebookMessenger } from "./facebookmessenger";
import { ViberServiceMessage } from "./viberservicemessage";
import { WhatsApp } from "./whatsapp";


export const ServerList = [
	"https://api.nexmo.com/beta/chatapp-accounts",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public account: Account;
  public application: Application;
  public facebookMessenger: FacebookMessenger;
  public viberServiceMessage: ViberServiceMessage;
  public whatsApp: WhatsApp;

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
    
    this.account = new Account(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.application = new Application(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.facebookMessenger = new FacebookMessenger(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.viberServiceMessage = new ViberServiceMessage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.whatsApp = new WhatsApp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}