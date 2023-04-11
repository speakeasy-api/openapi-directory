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
     * Creates a copy of the specified file. Folders cannot be copied.
     */
    driveFilesCopy(req: operations.DriveFilesCopyRequest, security: operations.DriveFilesCopySecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesCopyResponse>;
    /**
     * Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
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
     * Generates a set of file IDs which can be provided in insert or copy requests.
     */
    driveFilesGenerateIds(req: operations.DriveFilesGenerateIdsRequest, security: operations.DriveFilesGenerateIdsSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesGenerateIdsResponse>;
    /**
     * Gets a file's metadata or content by ID.
     */
    driveFilesGet(req: operations.DriveFilesGetRequest, security: operations.DriveFilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesGetResponse>;
    /**
     * Insert a new file.
     */
    driveFilesInsert(req: operations.DriveFilesInsertRequest, security: operations.DriveFilesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesInsertResponse>;
    /**
     * Lists the user's files.
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
    driveFilesPatch(req: operations.DriveFilesPatchRequest, security: operations.DriveFilesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesPatchResponse>;
    /**
     * Set the file's updated time to the current server time.
     */
    driveFilesTouch(req: operations.DriveFilesTouchRequest, security: operations.DriveFilesTouchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesTouchResponse>;
    /**
     * Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.
     */
    driveFilesTrash(req: operations.DriveFilesTrashRequest, security: operations.DriveFilesTrashSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesTrashResponse>;
    /**
     * Restores a file from the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files. Only the owner may untrash a file.
     */
    driveFilesUntrash(req: operations.DriveFilesUntrashRequest, security: operations.DriveFilesUntrashSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesUntrashResponse>;
    /**
     * Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as modifiedDate. This method supports patch semantics.
     */
    driveFilesUpdate(req: operations.DriveFilesUpdateRequest, security: operations.DriveFilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesUpdateResponse>;
    /**
     * Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.
     */
    driveFilesWatch(req: operations.DriveFilesWatchRequest, security: operations.DriveFilesWatchSecurity, config?: AxiosRequestConfig): Promise<operations.DriveFilesWatchResponse>;
}
