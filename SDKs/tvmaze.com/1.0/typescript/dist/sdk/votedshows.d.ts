import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VotedShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a show vote
     */
    deleteUserVotesShowsShowId(req: operations.DeleteUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserVotesShowsShowIdResponse>;
    /**
     * List the shows voted for
     */
    getUserVotesShows(req: operations.GetUserVotesShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsResponse>;
    /**
     * Check if a show is voted for
     */
    getUserVotesShowsShowId(req: operations.GetUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserVotesShowsShowIdResponse>;
    /**
     * Vote for a show
     *
     * @remarks
     * Set `voted_at` to `NULL` or leave it out to use the current time.
     */
    putUserVotesShowsShowId(req: operations.PutUserVotesShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserVotesShowsShowIdResponse>;
}
