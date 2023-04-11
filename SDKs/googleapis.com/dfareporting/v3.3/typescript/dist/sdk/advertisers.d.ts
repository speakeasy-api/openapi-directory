import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Advertisers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one advertiser by ID.
     */
    dfareportingAdvertisersGet(req: operations.DfareportingAdvertisersGetRequest, security: operations.DfareportingAdvertisersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersGetResponse>;
    /**
     * Inserts a new advertiser.
     */
    dfareportingAdvertisersInsert(req: operations.DfareportingAdvertisersInsertRequest, security: operations.DfareportingAdvertisersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersInsertResponse>;
    /**
     * Retrieves a list of advertisers, possibly filtered. This method supports paging.
     */
    dfareportingAdvertisersList(req: operations.DfareportingAdvertisersListRequest, security: operations.DfareportingAdvertisersListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersListResponse>;
    /**
     * Updates an existing advertiser. This method supports patch semantics.
     */
    dfareportingAdvertisersPatch(req: operations.DfareportingAdvertisersPatchRequest, security: operations.DfareportingAdvertisersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersPatchResponse>;
    /**
     * Updates an existing advertiser.
     */
    dfareportingAdvertisersUpdate(req: operations.DfareportingAdvertisersUpdateRequest, security: operations.DfareportingAdvertisersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertisersUpdateResponse>;
}
