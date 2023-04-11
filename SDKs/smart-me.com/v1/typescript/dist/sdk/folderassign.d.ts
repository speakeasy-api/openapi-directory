import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FolderAssign {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.
     */
    folderAssignPost(req: operations.FolderAssignPostRequest, config?: AxiosRequestConfig): Promise<operations.FolderAssignPostResponse>;
}
