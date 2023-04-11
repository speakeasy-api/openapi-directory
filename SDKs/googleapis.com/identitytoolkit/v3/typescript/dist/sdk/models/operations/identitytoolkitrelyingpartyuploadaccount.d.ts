import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountSecurity extends SpeakeasyBase {
    option1?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption1;
    option2?: IdentitytoolkitRelyingpartyUploadAccountSecurityOption2;
}
export declare class IdentitytoolkitRelyingpartyUploadAccountRequest extends SpeakeasyBase {
    identitytoolkitRelyingpartyUploadAccountRequest?: shared.IdentitytoolkitRelyingpartyUploadAccountRequest;
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
export declare class IdentitytoolkitRelyingpartyUploadAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    uploadAccountResponse?: shared.UploadAccountResponse;
}
