import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * ContentDepot Drive functionality for uploading and stating content files for use in other API operations.
 */
export declare class CDDrive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a file.
     *
     * @remarks
     * Delete a file from the customer's private CD Drive.
     */
    deleteApiV2CddriveFilesFileId(req: operations.DeleteApiV2CddriveFilesFileIdRequest, security: operations.DeleteApiV2CddriveFilesFileIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2CddriveFilesFileIdResponse>;
    /**
     * UNDER DEVELOPMENT - Delete a folder.
     *
     * @remarks
     * Delete a file from the customer's private CD Drive.
     */
    deleteApiV2CddriveFoldersFolderId(req: operations.DeleteApiV2CddriveFoldersFolderIdRequest, security: operations.DeleteApiV2CddriveFoldersFolderIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV2CddriveFoldersFolderIdResponse>;
    /**
     * Get file information.
     *
     * @remarks
     * Get the information about a file in the customer's private CD Drive.
     */
    getApiV2CddriveFilesFileId(req: operations.GetApiV2CddriveFilesFileIdRequest, security: operations.GetApiV2CddriveFilesFileIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2CddriveFilesFileIdResponse>;
    /**
     * UNDER DEVELOPMENT - Download a file.
     *
     * @remarks
     * Download a file from the customer's private CD Drive.
     */
    getApiV2CddriveFilesFileIdContent(req: operations.GetApiV2CddriveFilesFileIdContentRequest, security: operations.GetApiV2CddriveFilesFileIdContentSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2CddriveFilesFileIdContentResponse>;
    /**
     * UNDER DEVELOPMENT - Get folder information.
     *
     * @remarks
     * Get the information about a folder in the customer's private CD Drive.
     */
    getApiV2CddriveFoldersFolderId(req: operations.GetApiV2CddriveFoldersFolderIdRequest, security: operations.GetApiV2CddriveFoldersFolderIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2CddriveFoldersFolderIdResponse>;
    /**
     * Get the items in the folder.
     *
     * @remarks
     * Get the information about a folder in the customer's private CD Drive.
     */
    getApiV2CddriveFoldersFolderIdItems(req: operations.GetApiV2CddriveFoldersFolderIdItemsRequest, security: operations.GetApiV2CddriveFoldersFolderIdItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV2CddriveFoldersFolderIdItemsResponse>;
    /**
     * Upload a file.
     *
     * @remarks
     * Upload a file to the customer's private CD Drive.
     */
    postApiV2CddriveFilesContent(req: operations.PostApiV2CddriveFilesContentRequest, security: operations.PostApiV2CddriveFilesContentSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2CddriveFilesContentResponse>;
    /**
     * Create a folder.
     *
     * @remarks
     * Create a new folder in the customer's private CD Drive.
     */
    postApiV2CddriveFolders(req: operations.PostApiV2CddriveFoldersRequestBody, security: operations.PostApiV2CddriveFoldersSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV2CddriveFoldersResponse>;
}
