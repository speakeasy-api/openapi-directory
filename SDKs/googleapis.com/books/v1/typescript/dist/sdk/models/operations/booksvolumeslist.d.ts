import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksVolumesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Restrict to volumes by download availability.
 */
export declare enum BooksVolumesListDownloadEnum {
    DownloadUndefined = "DOWNLOAD_UNDEFINED",
    Epub = "EPUB"
}
/**
 * Filter search results.
 */
export declare enum BooksVolumesListFilterEnum {
    FilterUndefined = "FILTER_UNDEFINED",
    Ebooks = "ebooks",
    FreeEbooks = "free-ebooks",
    Full = "full",
    PaidEbooks = "paid-ebooks",
    Partial = "partial"
}
/**
 * Restrict search to this user's library.
 */
export declare enum BooksVolumesListLibraryRestrictEnum {
    LibraryRestrictUndefined = "LIBRARY_RESTRICT_UNDEFINED",
    MyLibrary = "my-library",
    NoRestrict = "no-restrict"
}
/**
 * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
 */
export declare enum BooksVolumesListMaxAllowedMaturityRatingEnum {
    MaxAllowedMaturityRatingUndefined = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED",
    Mature = "MATURE",
    NotMature = "not-mature"
}
/**
 * Sort search results.
 */
export declare enum BooksVolumesListOrderByEnum {
    OrderByUndefined = "ORDER_BY_UNDEFINED",
    Newest = "newest",
    Relevance = "relevance"
}
/**
 * Restrict to books or magazines.
 */
export declare enum BooksVolumesListPrintTypeEnum {
    PrintTypeUndefined = "PRINT_TYPE_UNDEFINED",
    All = "ALL",
    Books = "BOOKS",
    Magazines = "MAGAZINES"
}
/**
 * Restrict information returned to a set of selected fields.
 */
export declare enum BooksVolumesListProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}
export declare class BooksVolumesListRequest extends SpeakeasyBase {
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
     * Restrict to volumes by download availability.
     */
    download?: BooksVolumesListDownloadEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Filter search results.
     */
    filter?: BooksVolumesListFilterEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Restrict results to books with this language code.
     */
    langRestrict?: string;
    /**
     * Restrict search to this user's library.
     */
    libraryRestrict?: BooksVolumesListLibraryRestrictEnum;
    /**
     * The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
     */
    maxAllowedMaturityRating?: BooksVolumesListMaxAllowedMaturityRatingEnum;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Sort search results.
     */
    orderBy?: BooksVolumesListOrderByEnum;
    /**
     * Restrict and brand results for partner ID.
     */
    partner?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Restrict to books or magazines.
     */
    printType?: BooksVolumesListPrintTypeEnum;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: BooksVolumesListProjectionEnum;
    /**
     * Full-text search query string.
     */
    q: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Set to true to show books available for preorder. Defaults to false.
     */
    showPreorders?: boolean;
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
export declare class BooksVolumesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    volumes?: shared.Volumes;
}
