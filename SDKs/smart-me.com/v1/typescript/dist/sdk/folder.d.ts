import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Folder {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the Values for a folder or a meter
     *
     * @remarks
     * Gets the Values for a folder or a meter
     */
    folderGet(req: operations.FolderGetRequest, config?: AxiosRequestConfig): Promise<operations.FolderGetResponse>;
}
