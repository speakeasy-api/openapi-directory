import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsAdclientsGetAdCodeSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsAdclientsGetAdCodeSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsAdclientsGetAdCodeSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
    option2?: AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
}
export declare class AdsenseAccountsAdclientsGetAdCodeRequest extends SpeakeasyBase {
    /**
     * Account which contains the ad client.
     */
    accountId: string;
    /**
     * Ad client to get the code for.
     */
    adClientId: string;
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
     * Tag partner to include in the ad code snippet.
     */
    tagPartner?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsAdclientsGetAdCodeResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    adCode?: shared.AdCode;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
