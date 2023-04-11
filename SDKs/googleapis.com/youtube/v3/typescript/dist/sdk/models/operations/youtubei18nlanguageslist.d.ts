import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeI18nLanguagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeI18nLanguagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeI18nLanguagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeI18nLanguagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class YoutubeI18nLanguagesListSecurity extends SpeakeasyBase {
    option1?: YoutubeI18nLanguagesListSecurityOption1;
    option2?: YoutubeI18nLanguagesListSecurityOption2;
    option3?: YoutubeI18nLanguagesListSecurityOption3;
    option4?: YoutubeI18nLanguagesListSecurityOption4;
}
export declare class YoutubeI18nLanguagesListRequest extends SpeakeasyBase {
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
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    hl?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class YoutubeI18nLanguagesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    i18nLanguageListResponse?: shared.I18nLanguageListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
