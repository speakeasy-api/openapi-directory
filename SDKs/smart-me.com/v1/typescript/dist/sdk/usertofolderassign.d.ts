import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserToFolderAssign {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a user to folder assignement
     */
    userToFolderAssignDelete(req: operations.UserToFolderAssignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UserToFolderAssignDeleteResponse>;
    /**
     * Assign a user to a folder
     */
    userToFolderAssignPost(req: operations.UserToFolderAssignPostRequest, config?: AxiosRequestConfig): Promise<operations.UserToFolderAssignPostResponse>;
}
