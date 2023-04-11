import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Scrobbling {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List watched and acquired episodes for a show
     *
     * @remarks
     * This endpoint can be used by all users, even without premium
     */
    getScrobbleShowsShowId(req: operations.GetScrobbleShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetScrobbleShowsShowIdResponse>;
    /**
     * Mark episodes as acquired or watched based on their IDs
     *
     * @remarks
     * This endpoint can be used by all users, even without premium
     */
    postScrobbleEpisodes(req: operations.PostScrobbleEpisodesRequestBody[], config?: AxiosRequestConfig): Promise<operations.PostScrobbleEpisodesResponse>;
    /**
     * Mark episodes within a show as acquired or watched based on their attributes
     *
     * @remarks
     * To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
     *
     * This endpoint can be used by all users, even without premium.
     *
     */
    postScrobbleShows(req: operations.PostScrobbleShowsRequest, config?: AxiosRequestConfig): Promise<operations.PostScrobbleShowsResponse>;
    /**
     * Mark an episode as acquired or watched based on its ID
     *
     * @remarks
     * This endpoint can be used by all users, even without premium
     */
    putScrobbleEpisodesEpisodeId(req: operations.PutScrobbleEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutScrobbleEpisodesEpisodeIdResponse>;
}
