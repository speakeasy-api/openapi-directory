import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FolderMenu {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the folder menu items (each item might contain child items)
     */
    folderMenuGet(req: operations.FolderMenuGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderMenuGetResponse>;
    /**
     * Creates and updates the folder menu items
     */
    folderMenuPostForm(req: shared.FolderMenuConfiguration, config?: AxiosRequestConfig): Promise<operations.FolderMenuPostFormResponse>;
    /**
     * Creates and updates the folder menu items
     */
    folderMenuPostJson(req: shared.FolderMenuConfiguration, config?: AxiosRequestConfig): Promise<operations.FolderMenuPostJsonResponse>;
    /**
     * Creates and updates the folder menu items
     */
    folderMenuPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.FolderMenuPostRawResponse>;
}
