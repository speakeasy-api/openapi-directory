import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertRequest extends SpeakeasyBase {
    entityAdWordsLink?: shared.EntityAdWordsLink;
    /**
     * ID of the Google Analytics account to create the link for.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID to create the link for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementWebPropertyAdWordsLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    entityAdWordsLink?: shared.EntityAdWordsLink;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
