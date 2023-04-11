import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LanguageTranslationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class LanguageTranslationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class LanguageTranslationsListSecurity extends SpeakeasyBase {
    option1?: LanguageTranslationsListSecurityOption1;
    option2?: LanguageTranslationsListSecurityOption2;
}
/**
 * The format of the source text, in either HTML (default) or plain-text. A
 *
 * @remarks
 * value of "html" indicates HTML and a value of "text" indicates plain-text.
 */
export declare enum LanguageTranslationsListFormatEnum {
    Html = "html",
    Text = "text"
}
export declare class LanguageTranslationsListRequest extends SpeakeasyBase {
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
     * The customization id for translate
     */
    cid?: string[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The format of the source text, in either HTML (default) or plain-text. A
     *
     * @remarks
     * value of "html" indicates HTML and a value of "text" indicates plain-text.
     */
    format?: LanguageTranslationsListFormatEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The `model` type requested for this translation. Valid values are
     *
     * @remarks
     * listed in public documentation.
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
     * The input text to translate. Repeat this parameter to perform translation
     *
     * @remarks
     * operations on multiple text inputs.
     */
    q: string[];
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
     */
    quotaUser?: string;
    /**
     * The language of the source text, set to one of the language codes listed in
     *
     * @remarks
     * Language Support. If the source language is not specified, the API will
     * attempt to identify the source language automatically and return it within
     * the response.
     */
    source?: string;
    /**
     * The language to use for translation of the input text, set to one of the
     *
     * @remarks
     * language codes listed in Language Support.
     */
    target: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class LanguageTranslationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    translationsListResponse?: shared.TranslationsListResponse;
}
