import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksVolumesMybooksListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare enum BooksVolumesMybooksListAcquireMethodEnum {
    AcquireMethodUndefined = "ACQUIRE_METHOD_UNDEFINED",
    FamilyShared = "FAMILY_SHARED",
    Preordered = "PREORDERED",
    PreviouslyRented = "PREVIOUSLY_RENTED",
    PublicDomain = "PUBLIC_DOMAIN",
    Purchased = "PURCHASED",
    Rented = "RENTED",
    Sample = "SAMPLE",
    Uploaded = "UPLOADED"
}
export declare enum BooksVolumesMybooksListProcessingStateEnum {
    ProcessingStateUndefined = "PROCESSING_STATE_UNDEFINED",
    CompletedFailed = "COMPLETED_FAILED",
    CompletedSuccess = "COMPLETED_SUCCESS",
    Running = "RUNNING"
}
export declare class BooksVolumesMybooksListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * How the book was acquired
     */
    acquireMethod?: BooksVolumesMybooksListAcquireMethodEnum[];
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
     */
    locale?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
     */
    processingState?: BooksVolumesMybooksListProcessingStateEnum[];
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * Index of the first result to return (starts at 0)
     */
    startIndex?: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BooksVolumesMybooksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    volumes?: shared.Volumes;
}
