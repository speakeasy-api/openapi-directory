import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Shoppingadsprogram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
     */
    contentShoppingadsprogramGet(req: operations.ContentShoppingadsprogramGetRequest, security: operations.ContentShoppingadsprogramGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShoppingadsprogramGetResponse>;
    /**
     * Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.
     */
    contentShoppingadsprogramRequestreview(req: operations.ContentShoppingadsprogramRequestreviewRequest, security: operations.ContentShoppingadsprogramRequestreviewSecurity, config?: AxiosRequestConfig): Promise<operations.ContentShoppingadsprogramRequestreviewResponse>;
}
