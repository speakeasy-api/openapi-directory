import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Permissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves details of an Android app permission for display to an enterprise admin.
     */
    androidenterprisePermissionsGet(req: operations.AndroidenterprisePermissionsGetRequest, security: operations.AndroidenterprisePermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterprisePermissionsGetResponse>;
}
