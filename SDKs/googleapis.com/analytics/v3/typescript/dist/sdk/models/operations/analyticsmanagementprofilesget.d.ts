import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementProfilesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfilesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfilesGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementProfilesGetSecurityOption1;
    option2?: AnalyticsManagementProfilesGetSecurityOption2;
}
export declare class AnalyticsManagementProfilesGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve the view (profile) for.
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
     * View (Profile) ID to retrieve the view (profile) for.
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
     * Web property ID to retrieve the view (profile) for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementProfilesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    profile?: shared.Profile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
