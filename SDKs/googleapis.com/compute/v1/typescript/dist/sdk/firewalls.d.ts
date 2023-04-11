import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Firewalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified firewall.
     */
    computeFirewallsDelete(req: operations.ComputeFirewallsDeleteRequest, security: operations.ComputeFirewallsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsDeleteResponse>;
    /**
     * Returns the specified firewall.
     */
    computeFirewallsGet(req: operations.ComputeFirewallsGetRequest, security: operations.ComputeFirewallsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsGetResponse>;
    /**
     * Creates a firewall rule in the specified project using the data included in the request.
     */
    computeFirewallsInsert(req: operations.ComputeFirewallsInsertRequest, security: operations.ComputeFirewallsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsInsertResponse>;
    /**
     * Retrieves the list of firewall rules available to the specified project.
     */
    computeFirewallsList(req: operations.ComputeFirewallsListRequest, security: operations.ComputeFirewallsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsListResponse>;
    /**
     * Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeFirewallsPatch(req: operations.ComputeFirewallsPatchRequest, security: operations.ComputeFirewallsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsPatchResponse>;
    /**
     * Updates the specified firewall rule with the data included in the request. Note that all fields will be updated if using PUT, even fields that are not specified. To update individual fields, please use PATCH instead.
     */
    computeFirewallsUpdate(req: operations.ComputeFirewallsUpdateRequest, security: operations.ComputeFirewallsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeFirewallsUpdateResponse>;
}
