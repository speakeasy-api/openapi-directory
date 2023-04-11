import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WebResource {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Relinquish ownership of a website or domain.
     */
    siteVerificationWebResourceDelete(req: operations.SiteVerificationWebResourceDeleteRequest, security: operations.SiteVerificationWebResourceDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceDeleteResponse>;
    /**
     * Get the most current data for a website or domain.
     */
    siteVerificationWebResourceGet(req: operations.SiteVerificationWebResourceGetRequest, security: operations.SiteVerificationWebResourceGetSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetResponse>;
    /**
     * Get a verification token for placing on a website or domain.
     */
    siteVerificationWebResourceGetToken(req: operations.SiteVerificationWebResourceGetTokenRequest, security: operations.SiteVerificationWebResourceGetTokenSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceGetTokenResponse>;
    /**
     * Attempt verification of a website or domain.
     */
    siteVerificationWebResourceInsert(req: operations.SiteVerificationWebResourceInsertRequest, security: operations.SiteVerificationWebResourceInsertSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceInsertResponse>;
    /**
     * Get the list of your verified websites and domains.
     */
    siteVerificationWebResourceList(req: operations.SiteVerificationWebResourceListRequest, security: operations.SiteVerificationWebResourceListSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceListResponse>;
    /**
     * Modify the list of owners for your website or domain. This method supports patch semantics.
     */
    siteVerificationWebResourcePatch(req: operations.SiteVerificationWebResourcePatchRequest, security: operations.SiteVerificationWebResourcePatchSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourcePatchResponse>;
    /**
     * Modify the list of owners for your website or domain.
     */
    siteVerificationWebResourceUpdate(req: operations.SiteVerificationWebResourceUpdateRequest, security: operations.SiteVerificationWebResourceUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.SiteVerificationWebResourceUpdateResponse>;
}
