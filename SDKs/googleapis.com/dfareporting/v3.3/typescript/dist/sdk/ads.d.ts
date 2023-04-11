import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one ad by ID.
     */
    dfareportingAdsGet(req: operations.DfareportingAdsGetRequest, security: operations.DfareportingAdsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsGetResponse>;
    /**
     * Inserts a new ad.
     */
    dfareportingAdsInsert(req: operations.DfareportingAdsInsertRequest, security: operations.DfareportingAdsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsInsertResponse>;
    /**
     * Retrieves a list of ads, possibly filtered. This method supports paging.
     */
    dfareportingAdsList(req: operations.DfareportingAdsListRequest, security: operations.DfareportingAdsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsListResponse>;
    /**
     * Updates an existing ad. This method supports patch semantics.
     */
    dfareportingAdsPatch(req: operations.DfareportingAdsPatchRequest, security: operations.DfareportingAdsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsPatchResponse>;
    /**
     * Updates an existing ad.
     */
    dfareportingAdsUpdate(req: operations.DfareportingAdsUpdateRequest, security: operations.DfareportingAdsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdsUpdateResponse>;
}
