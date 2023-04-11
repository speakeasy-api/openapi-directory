import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SiteVerificationWebResourceGetTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SiteVerificationWebResourceGetTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SiteVerificationWebResourceGetTokenSecurity extends SpeakeasyBase {
    option1?: SiteVerificationWebResourceGetTokenSecurityOption1;
    option2?: SiteVerificationWebResourceGetTokenSecurityOption2;
}
export declare class SiteVerificationWebResourceGetTokenRequest extends SpeakeasyBase {
    siteVerificationWebResourceGettokenRequest?: shared.SiteVerificationWebResourceGettokenRequest;
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
export declare class SiteVerificationWebResourceGetTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    siteVerificationWebResourceGettokenResponse?: shared.SiteVerificationWebResourceGettokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
