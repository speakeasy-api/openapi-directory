import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Asset } from "./asset";
import { Channel } from "./channel";
import { Contributor } from "./contributor";
import { Feature } from "./feature";
import { Platform } from "./platform";
import { Schedule } from "./schedule";


export const ServerList = [
	"https://tv.api.pressassociation.io/v2",
	"http://tv.api.pressassociation.io/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public asset: Asset;
  public channel: Channel;
  public contributor: Contributor;
  public feature: Feature;
  public platform: Platform;
  public schedule: Schedule;

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
    
    this.asset = new Asset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channel = new Channel(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contributor = new Contributor(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.feature = new Feature(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.platform = new Platform(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.schedule = new Schedule(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}