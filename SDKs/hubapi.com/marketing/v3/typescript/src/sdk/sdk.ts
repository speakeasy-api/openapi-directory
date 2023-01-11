import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AttendanceSubscriberStateChanges } from "./attendancesubscriberstatechanges";
import { MarketingEventsExternal } from "./marketingeventsexternal";
import { SettingsExternal } from "./settingsexternal";


export const ServerList = [
	"https://api.hubapi.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public attendanceSubscriberStateChanges: AttendanceSubscriberStateChanges;
  public marketingEventsExternal: MarketingEventsExternal;
  public settingsExternal: SettingsExternal;

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
    
    this.attendanceSubscriberStateChanges = new AttendanceSubscriberStateChanges(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.marketingEventsExternal = new MarketingEventsExternal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settingsExternal = new SettingsExternal(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}