import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementRemarketingAudienceGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementRemarketingAudienceGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementRemarketingAudienceGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementRemarketingAudienceGetSecurityOption1;
    option2?: AnalyticsManagementRemarketingAudienceGetSecurityOption2;
}
export declare class AnalyticsManagementRemarketingAudienceGetRequest extends SpeakeasyBase {
    /**
     * The account ID of the remarketing audience to retrieve.
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
     * The ID of the remarketing audience to retrieve.
     */
    remarketingAudienceId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The web property ID of the remarketing audience to retrieve.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
