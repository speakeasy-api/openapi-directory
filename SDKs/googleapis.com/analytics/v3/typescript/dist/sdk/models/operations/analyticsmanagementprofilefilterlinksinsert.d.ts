import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementProfileFilterLinksInsertSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementProfileFilterLinksInsertRequest extends SpeakeasyBase {
    profileFilterLinkInput?: shared.ProfileFilterLinkInput;
    /**
     * Account ID to create profile filter link for.
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
     * Profile ID to create filter link for.
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
     * Web property Id to create profile filter link for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementProfileFilterLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    profileFilterLink?: shared.ProfileFilterLink;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
