import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Grouplicenseusers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     */
    androidenterpriseGrouplicenseusersList(req: operations.AndroidenterpriseGrouplicenseusersListRequest, security: operations.AndroidenterpriseGrouplicenseusersListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseGrouplicenseusersListResponse>;
}
