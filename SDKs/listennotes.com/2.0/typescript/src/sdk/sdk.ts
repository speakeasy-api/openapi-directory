import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { DirectoryApi } from "./directoryapi";
import { PlaylistApi } from "./playlistapi";
import { PodcasterApi } from "./podcasterapi";
import { SearchApi } from "./searchapi";


export const ServerList = [
	"https://listen-api.listennotes.com/api/v2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public directoryAPI: DirectoryApi;
  public playlistAPI: PlaylistApi;
  public podcasterAPI: PodcasterApi;
  public searchAPI: SearchApi;

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
    
    this.directoryAPI = new DirectoryApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.playlistAPI = new PlaylistApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.podcasterAPI = new PodcasterApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.searchAPI = new SearchApi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}