import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsPaymentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsPaymentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsPaymentsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsPaymentsListSecurityOption1;
    option2?: AdsenseAccountsPaymentsListSecurityOption2;
}
export declare class AdsenseAccountsPaymentsListRequest extends SpeakeasyBase {
    /**
     * Account for which to retrieve the payments.
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
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsPaymentsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    payments?: shared.Payments;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
