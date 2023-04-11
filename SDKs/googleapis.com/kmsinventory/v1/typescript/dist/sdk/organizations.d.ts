import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.
     */
    kmsinventoryOrganizationsProtectedResourcesSearch(req: operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest, security: operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity, config?: AxiosRequestConfig): Promise<operations.KmsinventoryOrganizationsProtectedResourcesSearchResponse>;
}
