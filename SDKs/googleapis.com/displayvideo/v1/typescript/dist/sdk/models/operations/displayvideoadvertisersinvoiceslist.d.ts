import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisplayvideoAdvertisersInvoicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoAdvertisersInvoicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DisplayvideoAdvertisersInvoicesListSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersInvoicesListSecurityOption1;
    option2?: DisplayvideoAdvertisersInvoicesListSecurityOption2;
}
/**
 * Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.
 */
export declare enum DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum {
    LoiSapinInvoiceTypeUnspecified = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED",
    LoiSapinInvoiceTypeMedia = "LOI_SAPIN_INVOICE_TYPE_MEDIA",
    LoiSapinInvoiceTypePlatform = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"
}
export declare class DisplayvideoAdvertisersInvoicesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The ID of the advertiser to list invoices for.
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
     * The month to list the invoices for. If not set, the request will retrieve invoices for the previous month. Must be in the format YYYYMM.
     */
    issueMonth?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Select type of invoice to retrieve for Loi Sapin advertisers. Only applicable to Loi Sapin advertisers. Will be ignored otherwise.
     */
    loiSapinInvoiceType?: DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInvoices` method. If not specified, the first page of results will be returned.
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
export declare class DisplayvideoAdvertisersInvoicesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listInvoicesResponse?: shared.ListInvoicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
