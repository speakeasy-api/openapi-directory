import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one billing profile by ID.
     */
    dfareportingBillingProfilesGet(req: operations.DfareportingBillingProfilesGetRequest, security: operations.DfareportingBillingProfilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesGetResponse>;
    /**
     * Retrieves a list of billing profiles, possibly filtered. This method supports paging.
     */
    dfareportingBillingProfilesList(req: operations.DfareportingBillingProfilesListRequest, security: operations.DfareportingBillingProfilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesListResponse>;
    /**
     * Updates an existing billing profile.
     */
    dfareportingBillingProfilesUpdate(req: operations.DfareportingBillingProfilesUpdateRequest, security: operations.DfareportingBillingProfilesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingProfilesUpdateResponse>;
}
