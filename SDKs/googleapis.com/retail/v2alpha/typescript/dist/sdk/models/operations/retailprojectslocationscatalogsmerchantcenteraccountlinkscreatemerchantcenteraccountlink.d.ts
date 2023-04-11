import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateMerchantCenterAccountLinkSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateMerchantCenterAccountLinkRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleCloudRetailV2alphaMerchantCenterAccountLinkInput?: shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput;
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/* /locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Required. The branch resource where this MerchantCenterAccountLink will be created. Format: projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}}
     */
    parent?: string;
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
export declare class RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateMerchantCenterAccountLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
