import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementWebpropertyUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementWebpropertyUserLinksListSecurityOption1;
    option2?: AnalyticsManagementWebpropertyUserLinksListSecurityOption2;
}
export declare class AnalyticsManagementWebpropertyUserLinksListRequest extends SpeakeasyBase {
    /**
     * Account ID which the given web property belongs to.
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
     * The maximum number of webProperty-user Links to include in this response.
     */
    maxResults?: number;
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
     * An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementWebpropertyUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    entityUserLinks?: shared.EntityUserLinks;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
