import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AchievementConfigurations } from "./achievementconfigurations";
import { LeaderboardConfigurations } from "./leaderboardconfigurations";


export const ServerList = [
	"https://gamesconfiguration.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/games/*/
export class SDK {
  public achievementConfigurations: AchievementConfigurations;
  public leaderboardConfigurations: LeaderboardConfigurations;

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
    
    this.achievementConfigurations = new AchievementConfigurations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.leaderboardConfigurations = new LeaderboardConfigurations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}