import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksVolumesGetSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Restrict information returned to a set of selected fields.
 */
export declare enum BooksVolumesGetProjectionEnum {
    ProjectionUndefined = "PROJECTION_UNDEFINED",
    Full = "FULL",
    Lite = "LITE"
}
export declare class BooksVolumesGetRequest extends SpeakeasyBase {
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
     * ISO-3166-1 code to override the IP-based location.
     */
    country?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Set to true to include non-comics series. Defaults to false.
     */
    includeNonComicsSeries?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Brand results for partner ID.
     */
    partner?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Restrict information returned to a set of selected fields.
     */
    projection?: BooksVolumesGetProjectionEnum;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * string to identify the originator of this request.
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
    userLibraryConsistentRead?: boolean;
    /**
     * ID of volume to retrieve.
     */
    volumeId: string;
}
export declare class BooksVolumesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    volume?: shared.Volume;
}
