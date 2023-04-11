import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetableRemarketingLists {
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
    dfareportingTargetableRemarketingListsGet(req: operations.DfareportingTargetableRemarketingListsGetRequest, security: operations.DfareportingTargetableRemarketingListsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetableRemarketingListsGetResponse>;
    /**
     * Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.
     */
    dfareportingTargetableRemarketingListsList(req: operations.DfareportingTargetableRemarketingListsListRequest, security: operations.DfareportingTargetableRemarketingListsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingTargetableRemarketingListsListResponse>;
}
