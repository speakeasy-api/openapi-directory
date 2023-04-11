import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksMylibraryBookshelvesRemoveVolumeSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The reason for which the book is removed from the library.
 */
export declare enum BooksMylibraryBookshelvesRemoveVolumeReasonEnum {
    ReasonUndefined = "REASON_UNDEFINED",
    Onboarding = "ONBOARDING"
}
export declare class BooksMylibraryBookshelvesRemoveVolumeRequest extends SpeakeasyBase {
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
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The reason for which the book is removed from the library.
     */
    reason?: BooksMylibraryBookshelvesRemoveVolumeReasonEnum;
    /**
     * ID of bookshelf from which to remove a volume.
     */
    shelf: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * ID of volume to remove.
     */
    volumeId: string;
}
export declare class BooksMylibraryBookshelvesRemoveVolumeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    empty?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
