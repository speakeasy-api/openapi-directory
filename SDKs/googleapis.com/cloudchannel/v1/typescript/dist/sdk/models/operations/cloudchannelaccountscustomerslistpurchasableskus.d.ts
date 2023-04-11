import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudchannelAccountsCustomersListPurchasableSkusSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Required. Change Type for the entitlement.
 */
export declare enum CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Upgrade = "UPGRADE",
    Downgrade = "DOWNGRADE"
}
export declare class CloudchannelAccountsCustomersListPurchasableSkusRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. Change Type for the entitlement.
     */
    changeOfferPurchaseChangeType?: CloudchannelAccountsCustomersListPurchasableSkusChangeOfferPurchaseChangeTypeEnum;
    /**
     * Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}
     */
    changeOfferPurchaseEntitlement?: string;
    /**
     * Required. List SKUs belonging to this Product. Format: products/{product_id}. Supports products/- to retrieve SKUs for all products.
     */
    createEntitlementPurchaseProduct?: string;
    /**
     * Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id}/customers/{customer_id}.
     */
    customer: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsCustomersListPurchasableSkusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudChannelV1ListPurchasableSkusResponse?: shared.GoogleCloudChannelV1ListPurchasableSkusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
