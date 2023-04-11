import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Required. Specifies which parts to the Category resource should be returned in the response.
 */
export declare enum MybusinessbusinessinformationCategoriesListViewEnum {
    CategoryViewUnspecified = "CATEGORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class MybusinessbusinessinformationCategoriesListRequest extends SpeakeasyBase {
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
     * Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The BCP 47 code of language.
     */
    languageCode?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.
     */
    pageSize?: number;
    /**
     * Optional. If specified, the next page of categories will be fetched.
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
     * Required. The ISO 3166-1 alpha-2 country code.
     */
    regionCode?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Required. Specifies which parts to the Category resource should be returned in the response.
     */
    view?: MybusinessbusinessinformationCategoriesListViewEnum;
}
export declare class MybusinessbusinessinformationCategoriesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCategoriesResponse?: shared.ListCategoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
