import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VotedEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserVotesEpisodesEpisodeId - Remove an episode vote
    **/
    deleteUserVotesEpisodesEpisodeId(req: operations.DeleteUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesEpisodesEpisodeIdResponse>;
    /**
     * getUserVotesEpisodes - List the episodes voted for
    **/
    getUserVotesEpisodes(config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesResponse>;
    /**
     * getUserVotesEpisodesEpisodeId - Check if an episode is voted for
    **/
    getUserVotesEpisodesEpisodeId(req: operations.GetUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesEpisodesEpisodeIdResponse>;
    /**
     * putUserVotesEpisodesEpisodeId - Vote for an episode
    **/
    putUserVotesEpisodesEpisodeId(req: operations.PutUserVotesEpisodesEpisodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesEpisodesEpisodeIdResponse>;
}
