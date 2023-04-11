import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.
     */
    driveFilesCopy(req: operations.DriveFilesCopyRequest, security: operations.DriveFilesCopySecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesCopyResponse>;
    /**
     * Creates a file.
     */
    driveFilesCreate(req: operations.DriveFilesCreateRequest, security: operations.DriveFilesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesCreateResponse>;
    /**
     * Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.
     */
    driveFilesDelete(req: operations.DriveFilesDeleteRequest, security: operations.DriveFilesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesDeleteResponse>;
    /**
     * Permanently deletes all of the user's trashed files.
     */
    driveFilesEmptyTrash(req: operations.DriveFilesEmptyTrashRequest, security: operations.DriveFilesEmptyTrashSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesEmptyTrashResponse>;
    /**
     * Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
     */
    driveFilesExport(req: operations.DriveFilesExportRequest, security: operations.DriveFilesExportSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesExportResponse>;
    /**
     * Generates a set of file IDs which can be provided in create or copy requests.
     */
    driveFilesGenerateIds(req: operations.DriveFilesGenerateIdsRequest, security: operations.DriveFilesGenerateIdsSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesGenerateIdsResponse>;
    /**
     * Gets a file's metadata or content by ID.
     */
    driveFilesGet(req: operations.DriveFilesGetRequest, security: operations.DriveFilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesGetResponse>;
    /**
     * Lists or searches files.
     */
    driveFilesList(req: operations.DriveFilesListRequest, security: operations.DriveFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesListResponse>;
    /**
     * Lists the labels on a file.
     */
    driveFilesListLabels(req: operations.DriveFilesListLabelsRequest, security: operations.DriveFilesListLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesListLabelsResponse>;
    /**
     * Modifies the set of labels on a file.
     */
    driveFilesModifyLabels(req: operations.DriveFilesModifyLabelsRequest, security: operations.DriveFilesModifyLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesModifyLabelsResponse>;
    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
     */
    driveFilesUpdate(req: operations.DriveFilesUpdateRequest, security: operations.DriveFilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesUpdateResponse>;
    /**
     * Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.
     */
    driveFilesWatch(req: operations.DriveFilesWatchRequest, security: operations.DriveFilesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesWatchResponse>;
}
