import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentSettlementreportsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ContentSettlementreportsListRequest extends SpeakeasyBase {
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
     * The maximum number of settlements to return in the response, used for paging. The default value is 200 returns per page, and the maximum allowed value is 5000 returns per page.
     */
    maxResults?: number;
    /**
     * The Merchant Center account to list settlements for.
     */
    merchantId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The token returned by the previous request.
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
     * Obtains settlements which have transactions before this date (inclusively), in ISO 8601 format.
     */
    transferEndDate?: string;
    /**
     * Obtains settlements which have transactions after this date (inclusively), in ISO 8601 format.
     */
    transferStartDate?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ContentSettlementreportsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    settlementreportsListResponse?: shared.SettlementreportsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
