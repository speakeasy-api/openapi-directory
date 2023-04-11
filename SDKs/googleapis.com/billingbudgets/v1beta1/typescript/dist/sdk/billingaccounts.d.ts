import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create.
     */
    billingbudgetsBillingAccountsBudgetsCreate(req: operations.BillingbudgetsBillingAccountsBudgetsCreateRequest, security: operations.BillingbudgetsBillingAccountsBudgetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BillingbudgetsBillingAccountsBudgetsCreateResponse>;
    /**
     * Deletes a budget. Returns successfully if already deleted.
     */
    billingbudgetsBillingAccountsBudgetsDelete(req: operations.BillingbudgetsBillingAccountsBudgetsDeleteRequest, security: operations.BillingbudgetsBillingAccountsBudgetsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BillingbudgetsBillingAccountsBudgetsDeleteResponse>;
    /**
     * Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     */
    billingbudgetsBillingAccountsBudgetsGet(req: operations.BillingbudgetsBillingAccountsBudgetsGetRequest, security: operations.BillingbudgetsBillingAccountsBudgetsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BillingbudgetsBillingAccountsBudgetsGetResponse>;
    /**
     * Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in the return value, though they may have been set in the Cloud Console.
     */
    billingbudgetsBillingAccountsBudgetsList(req: operations.BillingbudgetsBillingAccountsBudgetsListRequest, security: operations.BillingbudgetsBillingAccountsBudgetsListSecurity, config?: AxiosRequestConfig): Promise<operations.BillingbudgetsBillingAccountsBudgetsListResponse>;
    /**
     * Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not exposed in this API will not be changed by this method.
     */
    billingbudgetsBillingAccountsBudgetsPatch(req: operations.BillingbudgetsBillingAccountsBudgetsPatchRequest, security: operations.BillingbudgetsBillingAccountsBudgetsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BillingbudgetsBillingAccountsBudgetsPatchResponse>;
}
