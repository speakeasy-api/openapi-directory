import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Buyongoogleprograms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
     */
    contentBuyongoogleprogramsActivate(req: operations.ContentBuyongoogleprogramsActivateRequest, security: operations.ContentBuyongoogleprogramsActivateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsActivateResponse>;
    /**
     * Retrieves a status of the BoG program for your Merchant Center account.
     */
    contentBuyongoogleprogramsGet(req: operations.ContentBuyongoogleprogramsGetRequest, security: operations.ContentBuyongoogleprogramsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsGetResponse>;
    /**
     * Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
     */
    contentBuyongoogleprogramsOnboard(req: operations.ContentBuyongoogleprogramsOnboardRequest, security: operations.ContentBuyongoogleprogramsOnboardSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsOnboardResponse>;
    /**
     * Updates the status of the BoG program for your Merchant Center account.
     */
    contentBuyongoogleprogramsPatch(req: operations.ContentBuyongoogleprogramsPatchRequest, security: operations.ContentBuyongoogleprogramsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsPatchResponse>;
    /**
     * Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
     */
    contentBuyongoogleprogramsPause(req: operations.ContentBuyongoogleprogramsPauseRequest, security: operations.ContentBuyongoogleprogramsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsPauseResponse>;
    /**
     * Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.
     */
    contentBuyongoogleprogramsRequestreview(req: operations.ContentBuyongoogleprogramsRequestreviewRequest, security: operations.ContentBuyongoogleprogramsRequestreviewSecurity, config?: AxiosRequestConfig): Promise<operations.ContentBuyongoogleprogramsRequestreviewResponse>;
}
