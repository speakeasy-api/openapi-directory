import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Budget {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the budget information for the adgroup specified by the accountId and billingId.
     */
    adexchangebuyerBudgetGet(req: operations.AdexchangebuyerBudgetGetRequest, security: operations.AdexchangebuyerBudgetGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerBudgetGetResponse>;
    /**
     * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
     */
    adexchangebuyerBudgetPatch(req: operations.AdexchangebuyerBudgetPatchRequest, security: operations.AdexchangebuyerBudgetPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerBudgetPatchResponse>;
    /**
     * Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
     */
    adexchangebuyerBudgetUpdate(req: operations.AdexchangebuyerBudgetUpdateRequest, security: operations.AdexchangebuyerBudgetUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerBudgetUpdateResponse>;
}
