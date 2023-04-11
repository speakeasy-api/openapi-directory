import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one site by ID.
     */
    dfareportingSitesGet(req: operations.DfareportingSitesGetRequest, security: operations.DfareportingSitesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesGetResponse>;
    /**
     * Inserts a new site.
     */
    dfareportingSitesInsert(req: operations.DfareportingSitesInsertRequest, security: operations.DfareportingSitesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesInsertResponse>;
    /**
     * Retrieves a list of sites, possibly filtered. This method supports paging.
     */
    dfareportingSitesList(req: operations.DfareportingSitesListRequest, security: operations.DfareportingSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesListResponse>;
    /**
     * Updates an existing site. This method supports patch semantics.
     */
    dfareportingSitesPatch(req: operations.DfareportingSitesPatchRequest, security: operations.DfareportingSitesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesPatchResponse>;
    /**
     * Updates an existing site.
     */
    dfareportingSitesUpdate(req: operations.DfareportingSitesUpdateRequest, security: operations.DfareportingSitesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSitesUpdateResponse>;
}
