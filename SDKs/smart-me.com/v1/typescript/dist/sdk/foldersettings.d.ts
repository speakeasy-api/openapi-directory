import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FolderSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a folder
     */
    folderSettingsDelete(req: operations.FolderSettingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsDeleteResponse>;
    /**
     * Gets the settings of a folder or meter
     */
    folderSettingsGet(req: operations.FolderSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsGetResponse>;
    /**
     * Add or edit a folder or a meter. To add a new folder use and empty ID
     */
    folderSettingsPostForm(req: operations.FolderSettingsPostFormRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsPostFormResponse>;
    /**
     * Add or edit a folder or a meter. To add a new folder use and empty ID
     */
    folderSettingsPostJson(req: operations.FolderSettingsPostJsonRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsPostJsonResponse>;
    /**
     * Add or edit a folder or a meter. To add a new folder use and empty ID
     */
    folderSettingsPostRaw(req: operations.FolderSettingsPostRawRequest, config?: AxiosRequestConfig): Promise<operations.FolderSettingsPostRawResponse>;
}
