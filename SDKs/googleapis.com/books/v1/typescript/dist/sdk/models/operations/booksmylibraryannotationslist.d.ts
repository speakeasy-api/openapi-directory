import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BooksMylibraryAnnotationsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BooksMylibraryAnnotationsListRequest extends SpeakeasyBase {
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
     * The content version for the requested volume.
     */
    contentVersion?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The layer ID to limit annotation by.
     */
    layerId?: string;
    /**
     * The layer ID(s) to limit annotation by.
     */
    layerIds?: string[];
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The value of the nextToken from the previous page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
     */
    showDeleted?: boolean;
    /**
     * String to identify the originator of this request.
     */
    source?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
     */
    updatedMax?: string;
    /**
     * RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
     */
    updatedMin?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * The volume to restrict annotations to.
     */
    volumeId?: string;
}
export declare class BooksMylibraryAnnotationsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    annotations?: shared.Annotations;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
