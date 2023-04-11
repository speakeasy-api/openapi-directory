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
     * Deletes a reply.
     */
    driveRepliesDelete(req: operations.DriveRepliesDeleteRequest, security: operations.DriveRepliesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesDeleteResponse>;
    /**
     * Gets a reply.
     */
    driveRepliesGet(req: operations.DriveRepliesGetRequest, security: operations.DriveRepliesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesGetResponse>;
    /**
     * Creates a new reply to the given comment.
     */
    driveRepliesInsert(req: operations.DriveRepliesInsertRequest, security: operations.DriveRepliesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesInsertResponse>;
    /**
     * Lists all of the replies to a comment.
     */
    driveRepliesList(req: operations.DriveRepliesListRequest, security: operations.DriveRepliesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesListResponse>;
    /**
     * Updates an existing reply.
     */
    driveRepliesPatch(req: operations.DriveRepliesPatchRequest, security: operations.DriveRepliesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesPatchResponse>;
    /**
     * Updates an existing reply.
     */
    driveRepliesUpdate(req: operations.DriveRepliesUpdateRequest, security: operations.DriveRepliesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRepliesUpdateResponse>;
}
