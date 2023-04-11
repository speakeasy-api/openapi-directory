import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesMetagameListCategoriesByPlayerSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The collection of categories for which data will be returned.
 */
export declare enum GamesMetagameListCategoriesByPlayerCollectionEnum {
    CollectionUnspecified = "COLLECTION_UNSPECIFIED",
    All = "ALL"
}
export declare class GamesMetagameListCategoriesByPlayerRequest extends SpeakeasyBase {
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
     * The collection of categories for which data will be returned.
     */
    collection: GamesMetagameListCategoriesByPlayerCollectionEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The preferred language to use for strings returned by this method.
     */
    language?: string;
    /**
     * The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * A player ID. A value of `me` may be used in place of the authenticated player's ID.
     */
    playerId: string;
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
export declare class GamesMetagameListCategoriesByPlayerResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    categoryListResponse?: shared.CategoryListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
