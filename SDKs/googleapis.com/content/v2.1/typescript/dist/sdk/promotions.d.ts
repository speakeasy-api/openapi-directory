import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Promotions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.
     */
    contentPromotionsCreate(req: operations.ContentPromotionsCreateRequest, security: operations.ContentPromotionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPromotionsCreateResponse>;
    /**
     * Retrieves a promotion from your Merchant Center account.
     */
    contentPromotionsGet(req: operations.ContentPromotionsGetRequest, security: operations.ContentPromotionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPromotionsGetResponse>;
}
