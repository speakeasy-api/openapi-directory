import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementRemarketingAudienceUpdateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateRequest extends SpeakeasyBase {
    remarketingAudienceInput?: shared.RemarketingAudienceInput;
    /**
     * The account ID of the remarketing audience to update.
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
     * The ID of the remarketing audience to update.
     */
    remarketingAudienceId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The web property ID of the remarketing audience to update.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementRemarketingAudienceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    remarketingAudience?: shared.RemarketingAudience;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
