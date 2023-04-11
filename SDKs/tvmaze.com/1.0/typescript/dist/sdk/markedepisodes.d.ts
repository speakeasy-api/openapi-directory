import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarkedEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unmark an episode
     */
    deleteUserEpisodesEpisodeId(req: operations.DeleteUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserEpisodesEpisodeIdResponse>;
    /**
     * List the marked episodes
     */
    getUserEpisodes(req: operations.GetUserEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesResponse>;
    /**
     * Check if an episode is marked
     */
    getUserEpisodesEpisodeId(req: operations.GetUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesEpisodeIdResponse>;
    /**
     * Mark an episode
     *
     * @remarks
     * Set `marked_at` to `NULL` or leave it out to use the current time.
     */
    putUserEpisodesEpisodeId(req: operations.PutUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserEpisodesEpisodeIdResponse>;
}
