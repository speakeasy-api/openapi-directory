import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RemarketingLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one remarketing list by ID.
     */
    dfareportingRemarketingListsGet(req: operations.DfareportingRemarketingListsGetRequest, security: operations.DfareportingRemarketingListsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsGetResponse>;
    /**
     * Inserts a new remarketing list.
     */
    dfareportingRemarketingListsInsert(req: operations.DfareportingRemarketingListsInsertRequest, security: operations.DfareportingRemarketingListsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsInsertResponse>;
    /**
     * Retrieves a list of remarketing lists, possibly filtered. This method supports paging.
     */
    dfareportingRemarketingListsList(req: operations.DfareportingRemarketingListsListRequest, security: operations.DfareportingRemarketingListsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsListResponse>;
    /**
     * Updates an existing remarketing list. This method supports patch semantics.
     */
    dfareportingRemarketingListsPatch(req: operations.DfareportingRemarketingListsPatchRequest, security: operations.DfareportingRemarketingListsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsPatchResponse>;
    /**
     * Updates an existing remarketing list.
     */
    dfareportingRemarketingListsUpdate(req: operations.DfareportingRemarketingListsUpdateRequest, security: operations.DfareportingRemarketingListsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListsUpdateResponse>;
}
