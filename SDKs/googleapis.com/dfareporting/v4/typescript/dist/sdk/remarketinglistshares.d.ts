import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RemarketingListShares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one remarketing list share by remarketing list ID.
     */
    dfareportingRemarketingListSharesGet(req: operations.DfareportingRemarketingListSharesGetRequest, security: operations.DfareportingRemarketingListSharesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesGetResponse>;
    /**
     * Updates an existing remarketing list share. This method supports patch semantics.
     */
    dfareportingRemarketingListSharesPatch(req: operations.DfareportingRemarketingListSharesPatchRequest, security: operations.DfareportingRemarketingListSharesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesPatchResponse>;
    /**
     * Updates an existing remarketing list share.
     */
    dfareportingRemarketingListSharesUpdate(req: operations.DfareportingRemarketingListSharesUpdateRequest, security: operations.DfareportingRemarketingListSharesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingRemarketingListSharesUpdateResponse>;
}
