import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Grant access for a user to the given developer account.
     */
    androidpublisherUsersCreate(req: operations.AndroidpublisherUsersCreateRequest, security: operations.AndroidpublisherUsersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersCreateResponse>;
    /**
     * Removes all access for the user to the given developer account.
     */
    androidpublisherUsersDelete(req: operations.AndroidpublisherUsersDeleteRequest, security: operations.AndroidpublisherUsersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersDeleteResponse>;
    /**
     * Lists all users with access to a developer account.
     */
    androidpublisherUsersList(req: operations.AndroidpublisherUsersListRequest, security: operations.AndroidpublisherUsersListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersListResponse>;
    /**
     * Updates access for the user to the developer account.
     */
    androidpublisherUsersPatch(req: operations.AndroidpublisherUsersPatchRequest, security: operations.AndroidpublisherUsersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherUsersPatchResponse>;
}
