import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create `ClaimReview` markup on a page.
     */
    factchecktoolsPagesCreate(req: operations.FactchecktoolsPagesCreateRequest, security: operations.FactchecktoolsPagesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesCreateResponse>;
    /**
     * Delete all `ClaimReview` markup on a page.
     */
    factchecktoolsPagesDelete(req: operations.FactchecktoolsPagesDeleteRequest, security: operations.FactchecktoolsPagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesDeleteResponse>;
    /**
     * Get all `ClaimReview` markup on a page.
     */
    factchecktoolsPagesGet(req: operations.FactchecktoolsPagesGetRequest, security: operations.FactchecktoolsPagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesGetResponse>;
    /**
     * List the `ClaimReview` markup pages for a specific URL or for an organization.
     */
    factchecktoolsPagesList(req: operations.FactchecktoolsPagesListRequest, security: operations.FactchecktoolsPagesListSecurity, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesListResponse>;
    /**
     * Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
     */
    factchecktoolsPagesUpdate(req: operations.FactchecktoolsPagesUpdateRequest, security: operations.FactchecktoolsPagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesUpdateResponse>;
}
