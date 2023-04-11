import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementAccountUserLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementAccountUserLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementAccountUserLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementAccountUserLinksListSecurityOption1;
    option2?: AnalyticsManagementAccountUserLinksListSecurityOption2;
}
export declare class AnalyticsManagementAccountUserLinksListRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve the user links for.
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
     * The maximum number of account-user links to include in this response.
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
     * An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsManagementAccountUserLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    entityUserLinks?: shared.EntityUserLinks;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
