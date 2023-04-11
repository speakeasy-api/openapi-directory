import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudchannelAccountsChannelPartnerLinksListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. The level of granularity the ChannelPartnerLink will display.
 */
export declare enum CloudchannelAccountsChannelPartnerLinksListViewEnum {
    Unspecified = "UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudchannelAccountsChannelPartnerLinksListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.
     */
    pageSize?: number;
    /**
     * Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id}
     */
    parent: string;
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
    /**
     * Optional. The level of granularity the ChannelPartnerLink will display.
     */
    view?: CloudchannelAccountsChannelPartnerLinksListViewEnum;
}
export declare class CloudchannelAccountsChannelPartnerLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleCloudChannelV1ListChannelPartnerLinksResponse?: shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
