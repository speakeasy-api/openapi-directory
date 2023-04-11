import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FactchecktoolsClaimsSearchRequest extends SpeakeasyBase {
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
     * The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
     */
    languageCode?: string;
    /**
     * The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
     */
    maxAgeDays?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     */
    offset?: number;
    /**
     * The pagination size. We will return up to that many results. Defaults to 10 if not set.
     */
    pageSize?: number;
    /**
     * The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Textual query string. Required unless `review_publisher_site_filter` is specified.
     */
    query?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The review publisher site to filter results by, e.g. nytimes.com.
     */
    reviewPublisherSiteFilter?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FactchecktoolsClaimsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse?: shared.GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
