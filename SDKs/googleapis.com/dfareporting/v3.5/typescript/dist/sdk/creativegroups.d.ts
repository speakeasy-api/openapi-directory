import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreativeGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one creative group by ID.
     */
    dfareportingCreativeGroupsGet(req: operations.DfareportingCreativeGroupsGetRequest, security: operations.DfareportingCreativeGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsGetResponse>;
    /**
     * Inserts a new creative group.
     */
    dfareportingCreativeGroupsInsert(req: operations.DfareportingCreativeGroupsInsertRequest, security: operations.DfareportingCreativeGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsInsertResponse>;
    /**
     * Retrieves a list of creative groups, possibly filtered. This method supports paging.
     */
    dfareportingCreativeGroupsList(req: operations.DfareportingCreativeGroupsListRequest, security: operations.DfareportingCreativeGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsListResponse>;
    /**
     * Updates an existing creative group. This method supports patch semantics.
     */
    dfareportingCreativeGroupsPatch(req: operations.DfareportingCreativeGroupsPatchRequest, security: operations.DfareportingCreativeGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsPatchResponse>;
    /**
     * Updates an existing creative group.
     */
    dfareportingCreativeGroupsUpdate(req: operations.DfareportingCreativeGroupsUpdateRequest, security: operations.DfareportingCreativeGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCreativeGroupsUpdateResponse>;
}
