import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Replies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a reply to a comment.
     */
    driveRepliesCreate(req: operations.DriveRepliesCreateRequest, security: operations.DriveRepliesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesCreateResponse>;
    /**
     * Deletes a reply.
     */
    driveRepliesDelete(req: operations.DriveRepliesDeleteRequest, security: operations.DriveRepliesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesDeleteResponse>;
    /**
     * Gets a reply by ID.
     */
    driveRepliesGet(req: operations.DriveRepliesGetRequest, security: operations.DriveRepliesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesGetResponse>;
    /**
     * Lists a comment's replies.
     */
    driveRepliesList(req: operations.DriveRepliesListRequest, security: operations.DriveRepliesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesListResponse>;
    /**
     * Updates a reply with patch semantics.
     */
    driveRepliesUpdate(req: operations.DriveRepliesUpdateRequest, security: operations.DriveRepliesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesUpdateResponse>;
}
