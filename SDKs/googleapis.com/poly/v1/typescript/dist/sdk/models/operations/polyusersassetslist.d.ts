import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
 */
export declare enum PolyUsersAssetsListVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Published = "PUBLISHED",
    Private = "PRIVATE"
}
export declare class PolyUsersAssetsListRequest extends SpeakeasyBase {
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
     * Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
     */
    format?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
     */
    orderBy?: string;
    /**
     * The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
     */
    pageSize?: number;
    /**
     * Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
     */
    visibility?: PolyUsersAssetsListVisibilityEnum;
}
export declare class PolyUsersAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listUserAssetsResponse?: shared.ListUserAssetsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
