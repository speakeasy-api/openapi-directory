import { AxiosInstance } from "axios";
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
export declare const ServerList: readonly ["https://api.tvmaze.com/v1", "http://api.tvmaze.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    auth: Auth;
    followedNetworks: FollowedNetworks;
    followedPeople: FollowedPeople;
    followedShows: FollowedShows;
    followedWebchannels: FollowedWebchannels;
    markedEpisodes: MarkedEpisodes;
    scrobbling: Scrobbling;
    taggedShows: TaggedShows;
    votedEpisodes: VotedEpisodes;
    votedShows: VotedShows;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
