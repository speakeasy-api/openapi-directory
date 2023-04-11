import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsCustomchannelsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsCustomchannelsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsCustomchannelsGetSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsCustomchannelsGetSecurityOption1;
    option2?: AdsenseAccountsCustomchannelsGetSecurityOption2;
}
export declare class AdsenseAccountsCustomchannelsGetRequest extends SpeakeasyBase {
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
     * Custom channel to retrieve.
     */
    customChannelId: string;
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
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsCustomchannelsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customChannel?: shared.CustomChannel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
