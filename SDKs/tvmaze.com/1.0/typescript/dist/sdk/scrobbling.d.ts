import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scrobbling {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getScrobbleShowsShowId - List watched and acquired episodes for a show
     *
     * This endpoint can be used by all users, even without premium
    **/
    getScrobbleShowsShowId(req: operations.GetScrobbleShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScrobbleShowsShowIdResponse>;
    /**
     * postScrobbleEpisodes - Mark episodes as acquired or watched based on their IDs
     *
     * This endpoint can be used by all users, even without premium
    **/
    postScrobbleEpisodes(req: operations.PostScrobbleEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.PostScrobbleEpisodesResponse>;
    /**
     * postScrobbleShows - Mark episodes within a show as acquired or watched based on their attributes
     *
     * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
     *
     * This endpoint can be used by all users, even without premium.
     *
    **/
    postScrobbleShows(req: operations.PostScrobbleShowsRequest, config?: AxiosRequestConfig): Promise<operations.PostScrobbleShowsResponse>;
    /**
     * putScrobbleEpisodesEpisodeId - Mark an episode as acquired or watched based on its ID
     *
     * This endpoint can be used by all users, even without premium
    **/
    putScrobbleEpisodesEpisodeId(req: operations.PutScrobbleEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutScrobbleEpisodesEpisodeIdResponse>;
}
