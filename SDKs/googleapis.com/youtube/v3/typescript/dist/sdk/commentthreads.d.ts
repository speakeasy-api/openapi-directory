import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CommentThreads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new resource into this collection.
     */
    youtubeCommentThreadsInsert(req: operations.YoutubeCommentThreadsInsertRequest, security: operations.YoutubeCommentThreadsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentThreadsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeCommentThreadsList(req: operations.YoutubeCommentThreadsListRequest, security: operations.YoutubeCommentThreadsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentThreadsListResponse>;
}
