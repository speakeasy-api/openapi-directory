import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VotedEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove an episode vote
     */
    deleteUserVotesEpisodesEpisodeId(req: operations.DeleteUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesEpisodesEpisodeIdResponse>;
    /**
     * List the episodes voted for
     */
    getUserVotesEpisodes(config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesResponse>;
    /**
     * Check if an episode is voted for
     */
    getUserVotesEpisodesEpisodeId(req: operations.GetUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesEpisodeIdResponse>;
    /**
     * Vote for an episode
     */
    putUserVotesEpisodesEpisodeId(req: operations.PutUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesEpisodesEpisodeIdResponse>;
}
