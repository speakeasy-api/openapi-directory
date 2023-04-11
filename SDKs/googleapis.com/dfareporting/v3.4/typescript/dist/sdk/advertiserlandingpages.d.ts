import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdvertiserLandingPages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one landing page by ID.
     */
    dfareportingAdvertiserLandingPagesGet(req: operations.DfareportingAdvertiserLandingPagesGetRequest, security: operations.DfareportingAdvertiserLandingPagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesGetResponse>;
    /**
     * Inserts a new landing page.
     */
    dfareportingAdvertiserLandingPagesInsert(req: operations.DfareportingAdvertiserLandingPagesInsertRequest, security: operations.DfareportingAdvertiserLandingPagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesInsertResponse>;
    /**
     * Retrieves a list of landing pages.
     */
    dfareportingAdvertiserLandingPagesList(req: operations.DfareportingAdvertiserLandingPagesListRequest, security: operations.DfareportingAdvertiserLandingPagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesListResponse>;
    /**
     * Updates an existing advertiser landing page. This method supports patch semantics.
     */
    dfareportingAdvertiserLandingPagesPatch(req: operations.DfareportingAdvertiserLandingPagesPatchRequest, security: operations.DfareportingAdvertiserLandingPagesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesPatchResponse>;
    /**
     * Updates an existing landing page.
     */
    dfareportingAdvertiserLandingPagesUpdate(req: operations.DfareportingAdvertiserLandingPagesUpdateRequest, security: operations.DfareportingAdvertiserLandingPagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserLandingPagesUpdateResponse>;
}
