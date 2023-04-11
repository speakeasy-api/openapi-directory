import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AdvertiserGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing advertiser group.
     */
    dfareportingAdvertiserGroupsDelete(req: operations.DfareportingAdvertiserGroupsDeleteRequest, security: operations.DfareportingAdvertiserGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsDeleteResponse>;
    /**
     * Gets one advertiser group by ID.
     */
    dfareportingAdvertiserGroupsGet(req: operations.DfareportingAdvertiserGroupsGetRequest, security: operations.DfareportingAdvertiserGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsGetResponse>;
    /**
     * Inserts a new advertiser group.
     */
    dfareportingAdvertiserGroupsInsert(req: operations.DfareportingAdvertiserGroupsInsertRequest, security: operations.DfareportingAdvertiserGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsInsertResponse>;
    /**
     * Retrieves a list of advertiser groups, possibly filtered. This method supports paging.
     */
    dfareportingAdvertiserGroupsList(req: operations.DfareportingAdvertiserGroupsListRequest, security: operations.DfareportingAdvertiserGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsListResponse>;
    /**
     * Updates an existing advertiser group. This method supports patch semantics.
     */
    dfareportingAdvertiserGroupsPatch(req: operations.DfareportingAdvertiserGroupsPatchRequest, security: operations.DfareportingAdvertiserGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsPatchResponse>;
    /**
     * Updates an existing advertiser group.
     */
    dfareportingAdvertiserGroupsUpdate(req: operations.DfareportingAdvertiserGroupsUpdateRequest, security: operations.DfareportingAdvertiserGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserGroupsUpdateResponse>;
}
