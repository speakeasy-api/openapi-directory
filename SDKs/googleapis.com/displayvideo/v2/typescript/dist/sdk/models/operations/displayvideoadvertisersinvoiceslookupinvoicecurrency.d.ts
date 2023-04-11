import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1;
    option2?: DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2;
}
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The ID of the advertiser to lookup currency for.
     */
    advertiserId: string;
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
     * Month for which the currency is needed. If not set, the request will return existing currency settings for the advertiser. Must be in the format YYYYMM.
     */
    invoiceMonth?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
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
export declare class DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    lookupInvoiceCurrencyResponse?: shared.LookupInvoiceCurrencyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
