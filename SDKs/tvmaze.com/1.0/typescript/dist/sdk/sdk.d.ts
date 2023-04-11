import { Auth } from "./auth";
import { FollowedNetworks } from "./followednetworks";
import { FollowedPeople } from "./followedpeople";
import { FollowedShows } from "./followedshows";
import { FollowedWebchannels } from "./followedwebchannels";
import { MarkedEpisodes } from "./markedepisodes";
import * as shared from "./models/shared";
import { Scrobbling } from "./scrobbling";
import { TaggedShows } from "./taggedshows";
import { VotedEpisodes } from "./votedepisodes";
import { VotedShows } from "./votedshows";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.tvmaze.com/v1", "http://api.tvmaze.com/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Access to the user API is only possible for users with a [premium](http://www.tvmaze.com/premium) account. A user can only access their own user data.
 *
 * @remarks
 *
 * Authentication uses HTTP Basic. Use the TVmaze username as authentication username, and the TVmaze API key as authentication password. Your API key can be found on your [dashboard](http://www.tvmaze.com/dashboard). To try out these API calls from this page, click the "Authorize" button on top and input your credentials.
 *
 */
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
    private _globals;
    constructor(props?: SDKProps);
}
