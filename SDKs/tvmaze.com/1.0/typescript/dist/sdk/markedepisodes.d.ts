import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MarkedEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserEpisodesEpisodeId - Unmark an episode
    **/
    deleteUserEpisodesEpisodeId(req: operations.DeleteUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserEpisodesEpisodeIdResponse>;
    /**
     * getUserEpisodes - List the marked episodes
    **/
    getUserEpisodes(req: operations.GetUserEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesResponse>;
    /**
     * getUserEpisodesEpisodeId - Check if an episode is marked
    **/
    getUserEpisodesEpisodeId(req: operations.GetUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEpisodesEpisodeIdResponse>;
    /**
     * putUserEpisodesEpisodeId - Mark an episode
     *
     * Set `marked_at` to `NULL` or leave it out to use the current time.
    **/
    putUserEpisodesEpisodeId(req: operations.PutUserEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserEpisodesEpisodeIdResponse>;
}
