import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;
    option2?: AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListRequest extends SpeakeasyBase {
    /**
     * Account to which the ad client belongs.
     */
    accountId: string;
    /**
     * Ad client which contains the custom channel.
     */
    adClientId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Custom channel for which to list ad units.
     */
    customChannelId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Whether to include inactive ad units. Default: true.
     */
    includeInactive?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of ad units to include in the response, used for paging.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsCustomchannelsAdunitsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    adUnits?: shared.AdUnits;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
