import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PlacementGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one placement group by ID.
     */
    dfareportingPlacementGroupsGet(req: operations.DfareportingPlacementGroupsGetRequest, security: operations.DfareportingPlacementGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsGetResponse>;
    /**
     * Inserts a new placement group.
     */
    dfareportingPlacementGroupsInsert(req: operations.DfareportingPlacementGroupsInsertRequest, security: operations.DfareportingPlacementGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsInsertResponse>;
    /**
     * Retrieves a list of placement groups, possibly filtered. This method supports paging.
     */
    dfareportingPlacementGroupsList(req: operations.DfareportingPlacementGroupsListRequest, security: operations.DfareportingPlacementGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsListResponse>;
    /**
     * Updates an existing placement group. This method supports patch semantics.
     */
    dfareportingPlacementGroupsPatch(req: operations.DfareportingPlacementGroupsPatchRequest, security: operations.DfareportingPlacementGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsPatchResponse>;
    /**
     * Updates an existing placement group.
     */
    dfareportingPlacementGroupsUpdate(req: operations.DfareportingPlacementGroupsUpdateRequest, security: operations.DfareportingPlacementGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingPlacementGroupsUpdateResponse>;
}
