import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementProfileFilterLinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfileFilterLinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfileFilterLinksListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfileFilterLinksListSecurityOption1;
    option2?: AnalyticsManagementProfileFilterLinksListSecurityOption2;
}
export declare class AnalyticsManagementProfileFilterLinksListRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve profile filter links for.
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
     * The maximum number of profile filter links to include in this response.
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
     * Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    profileFilterLinks?: shared.ProfileFilterLinks;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
