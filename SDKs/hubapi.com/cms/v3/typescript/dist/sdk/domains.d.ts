import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations for fetching domains
 */
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get current domains
     *
     * @remarks
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
     */
    getCmsV3DomainsGetPage(req: operations.GetCmsV3DomainsGetPageRequest, security: operations.GetCmsV3DomainsGetPageSecurity, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsGetPageResponse>;
    /**
     * Get a single domain
     *
     * @remarks
     * Returns a single domains with the id specified.
     */
    getCmsV3DomainsDomainIdGetById(req: operations.GetCmsV3DomainsDomainIdGetByIdRequest, security: operations.GetCmsV3DomainsDomainIdGetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsDomainIdGetByIdResponse>;
}
