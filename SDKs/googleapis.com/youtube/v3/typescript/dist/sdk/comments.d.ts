import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubeCommentsDelete(req: operations.YoutubeCommentsDeleteRequest, security: operations.YoutubeCommentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeCommentsInsert(req: operations.YoutubeCommentsInsertRequest, security: operations.YoutubeCommentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeCommentsList(req: operations.YoutubeCommentsListRequest, security: operations.YoutubeCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsListResponse>;
    /**
     * Expresses the caller's opinion that one or more comments should be flagged as spam.
     */
    youtubeCommentsMarkAsSpam(req: operations.YoutubeCommentsMarkAsSpamRequest, security: operations.YoutubeCommentsMarkAsSpamSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsMarkAsSpamResponse>;
    /**
     * Sets the moderation status of one or more comments.
     */
    youtubeCommentsSetModerationStatus(req: operations.YoutubeCommentsSetModerationStatusRequest, security: operations.YoutubeCommentsSetModerationStatusSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsSetModerationStatusResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeCommentsUpdate(req: operations.YoutubeCommentsUpdateRequest, security: operations.YoutubeCommentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeCommentsUpdateResponse>;
}
