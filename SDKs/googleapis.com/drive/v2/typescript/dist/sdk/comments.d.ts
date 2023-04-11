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
     * Deletes a comment.
     */
    driveCommentsDelete(req: operations.DriveCommentsDeleteRequest, security: operations.DriveCommentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsDeleteResponse>;
    /**
     * Gets a comment by ID.
     */
    driveCommentsGet(req: operations.DriveCommentsGetRequest, security: operations.DriveCommentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsGetResponse>;
    /**
     * Creates a new comment on the given file.
     */
    driveCommentsInsert(req: operations.DriveCommentsInsertRequest, security: operations.DriveCommentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsInsertResponse>;
    /**
     * Lists a file's comments.
     */
    driveCommentsList(req: operations.DriveCommentsListRequest, security: operations.DriveCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsListResponse>;
    /**
     * Updates an existing comment.
     */
    driveCommentsPatch(req: operations.DriveCommentsPatchRequest, security: operations.DriveCommentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsPatchResponse>;
    /**
     * Updates an existing comment.
     */
    driveCommentsUpdate(req: operations.DriveCommentsUpdateRequest, security: operations.DriveCommentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsUpdateResponse>;
}
