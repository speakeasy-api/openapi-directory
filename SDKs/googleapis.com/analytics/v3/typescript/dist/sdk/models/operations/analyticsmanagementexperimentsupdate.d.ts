import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementExperimentsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementExperimentsUpdateSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementExperimentsUpdateSecurityOption1;
    option2?: AnalyticsManagementExperimentsUpdateSecurityOption2;
}
export declare class AnalyticsManagementExperimentsUpdateRequest extends SpeakeasyBase {
    experiment?: shared.Experiment;
    /**
     * Account ID of the experiment to update.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Experiment ID of the experiment to update.
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
     * View (Profile) ID of the experiment to update.
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
     * Web property ID of the experiment to update.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementExperimentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    experiment?: shared.Experiment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
