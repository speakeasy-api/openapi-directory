import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MybusinessAttributesListRequest extends SpeakeasyBase {
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
     * The primary category stable ID to find available attributes.
     */
    categoryId?: string;
    /**
     * The ISO 3166-1 alpha-2 country code to find available attributes.
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
     * The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.
     */
    languageCode?: string;
    /**
     * Resource name of the location to look up available attributes.
     */
    name?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * How many attributes to include per page. Default is 200, minimum is 1.
     */
    pageSize?: number;
    /**
     * If specified, the next page of attribute metadata is retrieved. The `pageToken` is returned when a call to `attributes.list` returns more results than can fit into the requested page size.
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
}
export declare class MybusinessAttributesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAttributeMetadataResponse?: shared.ListAttributeMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
