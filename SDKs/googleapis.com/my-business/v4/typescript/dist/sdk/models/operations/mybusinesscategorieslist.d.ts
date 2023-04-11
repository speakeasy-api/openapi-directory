import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Optional. Specifies which parts to the Category resource should be returned in the response.
 */
export declare enum MybusinessCategoriesListViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessCategoriesListRequest extends SpeakeasyBase {
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
     * The BCP 47 code of language. If the language is not available, it will default to English.
     */
    languageCode?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     */
    pageSize?: number;
    /**
     * If specified, the next page of categories will be fetched.
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
     * The ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
    /**
     * Optional filter string from user.
     */
    searchTerm?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Optional. Specifies which parts to the Category resource should be returned in the response.
     */
    view?: MybusinessCategoriesListViewEnum;
}
export declare class MybusinessCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listBusinessCategoriesResponse?: shared.ListBusinessCategoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
