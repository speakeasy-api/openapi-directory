import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementExperimentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsListSecurityOption1;
    option2?: AnalyticsManagementExperimentsListSecurityOption2;
    option3?: AnalyticsManagementExperimentsListSecurityOption3;
}
export declare class AnalyticsManagementExperimentsListRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve experiments for.
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
     * The maximum number of experiments to include in this response.
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
     * View (Profile) ID to retrieve experiments for.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID to retrieve experiments for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    experiments?: shared.Experiments;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
