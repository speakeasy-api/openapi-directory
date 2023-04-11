import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubUser {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a subuser
     */
    subUserDelete(req: operations.SubUserDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SubUserDeleteResponse>;
    /**
     * Get a sub user. The user must be assigend to the user that makes this call.
     */
    subUserGet(req: operations.SubUserGetRequest, config?: AxiosRequestConfig): Promise<operations.SubUserGetResponse>;
    /**
     * Creates or updates a subuser.
     *             To create a new user set no ID (empty)
     */
    subUserPostForm(req: shared.SubUserData, config?: AxiosRequestConfig): Promise<operations.SubUserPostFormResponse>;
    /**
     * Creates or updates a subuser.
     *             To create a new user set no ID (empty)
     */
    subUserPostJson(req: shared.SubUserData, config?: AxiosRequestConfig): Promise<operations.SubUserPostJsonResponse>;
    /**
     * Creates or updates a subuser.
     *             To create a new user set no ID (empty)
     */
    subUserPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.SubUserPostRawResponse>;
}
