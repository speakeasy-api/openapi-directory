import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LanguageLanguagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class LanguageLanguagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class LanguageLanguagesListSecurity extends SpeakeasyBase {
    option1?: LanguageLanguagesListSecurityOption1;
    option2?: LanguageLanguagesListSecurityOption2;
}
export declare class LanguageLanguagesListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * OAuth bearer token.
     */
    bearerToken?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The model type for which supported languages should be returned.
     */
    model?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Pretty-print response.
     */
    pp?: boolean;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
     */
    quotaUser?: string;
    /**
     * The language to use to return localized, human readable names of supported
     *
     * @remarks
     * languages.
     */
    target?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class LanguageLanguagesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    languagesListResponse?: shared.LanguagesListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
