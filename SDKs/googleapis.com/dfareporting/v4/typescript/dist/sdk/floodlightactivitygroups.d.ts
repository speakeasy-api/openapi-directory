import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FloodlightActivityGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one floodlight activity group by ID.
     */
    dfareportingFloodlightActivityGroupsGet(req: operations.DfareportingFloodlightActivityGroupsGetRequest, security: operations.DfareportingFloodlightActivityGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsGetResponse>;
    /**
     * Inserts a new floodlight activity group.
     */
    dfareportingFloodlightActivityGroupsInsert(req: operations.DfareportingFloodlightActivityGroupsInsertRequest, security: operations.DfareportingFloodlightActivityGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsInsertResponse>;
    /**
     * Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.
     */
    dfareportingFloodlightActivityGroupsList(req: operations.DfareportingFloodlightActivityGroupsListRequest, security: operations.DfareportingFloodlightActivityGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsListResponse>;
    /**
     * Updates an existing floodlight activity group. This method supports patch semantics.
     */
    dfareportingFloodlightActivityGroupsPatch(req: operations.DfareportingFloodlightActivityGroupsPatchRequest, security: operations.DfareportingFloodlightActivityGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsPatchResponse>;
    /**
     * Updates an existing floodlight activity group.
     */
    dfareportingFloodlightActivityGroupsUpdate(req: operations.DfareportingFloodlightActivityGroupsUpdateRequest, security: operations.DfareportingFloodlightActivityGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightActivityGroupsUpdateResponse>;
}
