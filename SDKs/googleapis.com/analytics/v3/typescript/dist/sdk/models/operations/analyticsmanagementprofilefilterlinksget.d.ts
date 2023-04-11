import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementProfileFilterLinksGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfileFilterLinksGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfileFilterLinksGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfileFilterLinksGetSecurityOption1;
    option2?: AnalyticsManagementProfileFilterLinksGetSecurityOption2;
}
export declare class AnalyticsManagementProfileFilterLinksGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve profile filter link for.
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
     * ID of the profile filter link.
     */
    linkId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Profile ID to retrieve filter link for.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property Id to retrieve profile filter link for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
