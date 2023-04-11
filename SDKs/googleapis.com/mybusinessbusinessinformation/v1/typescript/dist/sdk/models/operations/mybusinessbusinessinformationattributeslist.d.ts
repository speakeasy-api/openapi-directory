import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MybusinessbusinessinformationAttributesListRequest extends SpeakeasyBase {
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
     * The primary category stable ID to find available attributes. Must be of the format categories/{category_id}.
     */
    categoryName?: string;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * How many attributes to include per page. Default is 200, minimum is 1.
     */
    pageSize?: number;
    /**
     * If specified, the next page of attribute metadata is retrieved.
     */
    pageToken?: string;
    /**
     * Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.
     */
    parent?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The ISO 3166-1 alpha-2 country code to find available attributes.
     */
    regionCode?: string;
    /**
     * Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.
     */
    showAll?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationAttributesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAttributeMetadataResponse?: shared.ListAttributeMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
