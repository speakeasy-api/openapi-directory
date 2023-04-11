import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subaccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one subaccount by ID.
     */
    dfareportingSubaccountsGet(req: operations.DfareportingSubaccountsGetRequest, security: operations.DfareportingSubaccountsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsGetResponse>;
    /**
     * Inserts a new subaccount.
     */
    dfareportingSubaccountsInsert(req: operations.DfareportingSubaccountsInsertRequest, security: operations.DfareportingSubaccountsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsInsertResponse>;
    /**
     * Gets a list of subaccounts, possibly filtered. This method supports paging.
     */
    dfareportingSubaccountsList(req: operations.DfareportingSubaccountsListRequest, security: operations.DfareportingSubaccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsListResponse>;
    /**
     * Updates an existing subaccount. This method supports patch semantics.
     */
    dfareportingSubaccountsPatch(req: operations.DfareportingSubaccountsPatchRequest, security: operations.DfareportingSubaccountsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsPatchResponse>;
    /**
     * Updates an existing subaccount.
     */
    dfareportingSubaccountsUpdate(req: operations.DfareportingSubaccountsUpdateRequest, security: operations.DfareportingSubaccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsUpdateResponse>;
}
