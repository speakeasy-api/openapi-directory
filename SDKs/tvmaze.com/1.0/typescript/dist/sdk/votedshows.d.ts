import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VotedShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserVotesShowsShowId - Remove a show vote
    **/
    deleteUserVotesShowsShowId(req: operations.DeleteUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesShowsShowIdResponse>;
    /**
     * getUserVotesShows - List the shows voted for
    **/
    getUserVotesShows(req: operations.GetUserVotesShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsResponse>;
    /**
     * getUserVotesShowsShowId - Check if a show is voted for
    **/
    getUserVotesShowsShowId(req: operations.GetUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsShowIdResponse>;
    /**
     * putUserVotesShowsShowId - Vote for a show
     *
     * Set `voted_at` to `NULL` or leave it out to use the current time.
    **/
    putUserVotesShowsShowId(req: operations.PutUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesShowsShowIdResponse>;
}
