import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksMylibraryReadingpositionsSetPositionSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Action that caused this reading position to be set.
 */
export declare enum BooksMylibraryReadingpositionsSetPositionActionEnum {
    ActionUndefined = "ACTION_UNDEFINED",
    Bookmark = "bookmark",
    Chapter = "chapter",
    NextPage = "next-page",
    PrevPage = "prev-page",
    Scroll = "scroll",
    Search = "search"
}
export declare class BooksMylibraryReadingpositionsSetPositionRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Action that caused this reading position to be set.
     */
    action?: BooksMylibraryReadingpositionsSetPositionActionEnum;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Volume content version for which this reading position applies.
     */
    contentVersion?: string;
    /**
     * Random persistent device cookie optional on set position.
     */
    deviceCookie?: string;
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
     * Position string for the new volume reading position.
     */
    position: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 UTC format timestamp associated with this reading position.
     */
    timestamp: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * ID of volume for which to update the reading position.
     */
    volumeId: string;
}
export declare class BooksMylibraryReadingpositionsSetPositionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
