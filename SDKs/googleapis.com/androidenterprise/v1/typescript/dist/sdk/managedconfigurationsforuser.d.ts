import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Managedconfigurationsforuser {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a per-user managed configuration for an app for the specified user.
     */
    androidenterpriseManagedconfigurationsforuserDelete(req: operations.AndroidenterpriseManagedconfigurationsforuserDeleteRequest, security: operations.AndroidenterpriseManagedconfigurationsforuserDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsforuserDeleteResponse>;
    /**
     * Retrieves details of a per-user managed configuration for an app for the specified user.
     */
    androidenterpriseManagedconfigurationsforuserGet(req: operations.AndroidenterpriseManagedconfigurationsforuserGetRequest, security: operations.AndroidenterpriseManagedconfigurationsforuserGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsforuserGetResponse>;
    /**
     * Lists all the per-user managed configurations for the specified user. Only the ID is set.
     */
    androidenterpriseManagedconfigurationsforuserList(req: operations.AndroidenterpriseManagedconfigurationsforuserListRequest, security: operations.AndroidenterpriseManagedconfigurationsforuserListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsforuserListResponse>;
    /**
     * Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
     */
    androidenterpriseManagedconfigurationsforuserUpdate(req: operations.AndroidenterpriseManagedconfigurationsforuserUpdateRequest, security: operations.AndroidenterpriseManagedconfigurationsforuserUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseManagedconfigurationsforuserUpdateResponse>;
}
