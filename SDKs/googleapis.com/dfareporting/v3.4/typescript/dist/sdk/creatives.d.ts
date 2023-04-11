import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Creatives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one creative by ID.
     */
    dfareportingCreativesGet(req: operations.DfareportingCreativesGetRequest, security: operations.DfareportingCreativesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesGetResponse>;
    /**
     * Inserts a new creative.
     */
    dfareportingCreativesInsert(req: operations.DfareportingCreativesInsertRequest, security: operations.DfareportingCreativesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesInsertResponse>;
    /**
     * Retrieves a list of creatives, possibly filtered. This method supports paging.
     */
    dfareportingCreativesList(req: operations.DfareportingCreativesListRequest, security: operations.DfareportingCreativesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesListResponse>;
    /**
     * Updates an existing creative. This method supports patch semantics.
     */
    dfareportingCreativesPatch(req: operations.DfareportingCreativesPatchRequest, security: operations.DfareportingCreativesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesPatchResponse>;
    /**
     * Updates an existing creative.
     */
    dfareportingCreativesUpdate(req: operations.DfareportingCreativesUpdateRequest, security: operations.DfareportingCreativesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativesUpdateResponse>;
}
