import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementGoalsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementGoalsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementGoalsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementGoalsGetSecurityOption1;
    option2?: AnalyticsManagementGoalsGetSecurityOption2;
}
export declare class AnalyticsManagementGoalsGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve the goal for.
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
     * Goal ID to retrieve the goal for.
     */
    goalId: string;
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
     * View (Profile) ID to retrieve the goal for.
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
     * Web property ID to retrieve the goal for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementGoalsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    goal?: shared.Goal;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
