import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Merchants {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * ListMerchants
     *
     * @remarks
     * Returns `Merchant` information for a given access token.
     *
     * If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
     * You can specify your personal access token to get your own merchant information or specify an OAuth token
     * to get the information for the  merchant that granted you access.
     *
     * If you know the merchant ID, you can also use the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant)
     * endpoint to get the merchant information.
     */
    listMerchants(req: operations.ListMerchantsRequest, security: operations.ListMerchantsSecurity, config?: AxiosRequestConfig): Promise<operations.ListMerchantsResponse>;
    /**
     * RetrieveMerchant
     *
     * @remarks
     * Retrieve a `Merchant` object for the given `merchant_id`.
     */
    retrieveMerchant(req: operations.RetrieveMerchantRequest, security: operations.RetrieveMerchantSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveMerchantResponse>;
}
