import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { Auth } from "./auth";
import { FollowedNetworks } from "./followednetworks";
import { FollowedPeople } from "./followedpeople";
import { FollowedShows } from "./followedshows";
import { FollowedWebchannels } from "./followedwebchannels";
import { MarkedEpisodes } from "./markedepisodes";
import { Scrobbling } from "./scrobbling";
import { TaggedShows } from "./taggedshows";
import { VotedEpisodes } from "./votedepisodes";
import { VotedShows } from "./votedshows";


export const ServerList = [
	"https://api.tvmaze.com/v1",
	"http://api.tvmaze.com/v1",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public auth: Auth;
  public followedNetworks: FollowedNetworks;
  public followedPeople: FollowedPeople;
  public followedShows: FollowedShows;
  public followedWebchannels: FollowedWebchannels;
  public markedEpisodes: MarkedEpisodes;
  public scrobbling: Scrobbling;
  public taggedShows: TaggedShows;
  public votedEpisodes: VotedEpisodes;
  public votedShows: VotedShows;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.auth = new Auth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.followedNetworks = new FollowedNetworks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.followedPeople = new FollowedPeople(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.followedShows = new FollowedShows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.followedWebchannels = new FollowedWebchannels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.markedEpisodes = new MarkedEpisodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.scrobbling = new Scrobbling(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taggedShows = new TaggedShows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.votedEpisodes = new VotedEpisodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.votedShows = new VotedShows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}