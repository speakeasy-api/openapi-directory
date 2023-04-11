import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Revisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
     */
    driveRevisionsDelete(req: operations.DriveRevisionsDeleteRequest, security: operations.DriveRevisionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsDeleteResponse>;
    /**
     * Gets a specific revision.
     */
    driveRevisionsGet(req: operations.DriveRevisionsGetRequest, security: operations.DriveRevisionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsGetResponse>;
    /**
     * Lists a file's revisions.
     */
    driveRevisionsList(req: operations.DriveRevisionsListRequest, security: operations.DriveRevisionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsListResponse>;
    /**
     * Updates a revision.
     */
    driveRevisionsPatch(req: operations.DriveRevisionsPatchRequest, security: operations.DriveRevisionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsPatchResponse>;
    /**
     * Updates a revision.
     */
    driveRevisionsUpdate(req: operations.DriveRevisionsUpdateRequest, security: operations.DriveRevisionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveRevisionsUpdateResponse>;
}
