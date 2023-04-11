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
     * Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`
     */
    cloudresourcemanagerOrganizationsSearch(req: operations.CloudresourcemanagerOrganizationsSearchRequest, security: operations.CloudresourcemanagerOrganizationsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsSearchResponse>;
}
