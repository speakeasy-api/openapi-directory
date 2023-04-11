import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This section shows how you can create, retrieve and modify subaccounts of a primary account.
 */
export declare class SubaccountManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create subaccount
     *
     * @remarks
     * Create a subaccount for a given primary account.
     *
     */
    createSubAccount(req: operations.CreateSubAccountRequest, security: operations.CreateSubAccountSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSubAccountResponse>;
    /**
     * Modify a subaccount
     *
     * @remarks
     * Change one or more properties of a subaccount.
     *
     */
    modifySubaccount(req: operations.ModifySubaccountRequest, security: operations.ModifySubaccountSecurity, config?: AxiosRequestConfig): Promise<operations.ModifySubaccountResponse>;
    /**
     * Retrieve a subaccount
     *
     * @remarks
     * Get the information of a subaccount specified with its API key.
     *
     */
    retrieveSubaccount(req: operations.RetrieveSubaccountRequest, security: operations.RetrieveSubaccountSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveSubaccountResponse>;
    /**
     * Retrieve list of subaccounts
     *
     * @remarks
     * Get the information of all the subaccounts owned by the primary account.
     *
     */
    retrieveSubaccountsList(req: operations.RetrieveSubaccountsListRequest, security: operations.RetrieveSubaccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveSubaccountsListResponse>;
}
