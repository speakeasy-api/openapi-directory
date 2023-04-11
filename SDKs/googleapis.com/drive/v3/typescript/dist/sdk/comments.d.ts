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
     * Creates a comment on a file.
     */
    driveCommentsCreate(req: operations.DriveCommentsCreateRequest, security: operations.DriveCommentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsCreateResponse>;
    /**
     * Deletes a comment.
     */
    driveCommentsDelete(req: operations.DriveCommentsDeleteRequest, security: operations.DriveCommentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsDeleteResponse>;
    /**
     * Gets a comment by ID.
     */
    driveCommentsGet(req: operations.DriveCommentsGetRequest, security: operations.DriveCommentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsGetResponse>;
    /**
     * Lists a file's comments.
     */
    driveCommentsList(req: operations.DriveCommentsListRequest, security: operations.DriveCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsListResponse>;
    /**
     * Updates a comment with patch semantics.
     */
    driveCommentsUpdate(req: operations.DriveCommentsUpdateRequest, security: operations.DriveCommentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveCommentsUpdateResponse>;
}
