import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementExperimentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsGetSecurityOption1;
    option2?: AnalyticsManagementExperimentsGetSecurityOption2;
    option3?: AnalyticsManagementExperimentsGetSecurityOption3;
}
export declare class AnalyticsManagementExperimentsGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve the experiment for.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Experiment ID to retrieve the experiment for.
     */
    experimentId: string;
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
     * View (Profile) ID to retrieve the experiment for.
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
     * Web property ID to retrieve the experiment for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    experiment?: shared.Experiment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
