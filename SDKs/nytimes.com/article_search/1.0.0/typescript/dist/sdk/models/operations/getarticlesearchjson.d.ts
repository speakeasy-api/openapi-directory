import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * "By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."
 *
 * @remarks
 *
 */
export declare enum GetArticlesearchJsonSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}
export declare class GetArticlesearchJsonRequest extends SpeakeasyBase {
    /**
     * "Format: YYYYMMDD
     *
     * @remarks
     *
     * Restricts responses to results with publication dates of the date specified or later."
     *
     */
    beginDate?: string;
    /**
     * "Format: YYYYMMDD
     *
     * @remarks
     *
     * Restricts responses to results with publication dates of the date specified or earlier."
     *
     */
    endDate?: string;
    /**
     * Comma-delimited list of facets
     *
     * @remarks
     *
     * Specifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:
     *
     * section_name
     *
     * document_type
     *
     * type_of_material
     *
     * source
     *
     * day_of_week
     *
     * To learn more about using facets, see Using Facets.
     *
     */
    facetField?: string;
    /**
     * When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.
     *
     * @remarks
     *
     */
    facetFilter?: boolean;
    /**
     * "Comma-delimited list of fields (no limit)
     *
     * @remarks
     *
     *   Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned:
     *
     *   web_url
     *
     *   snippet
     *
     *   lead_paragraph
     *
     *   abstract
     *
     *   print_page
     *
     *   blog
     *
     *   source
     *
     *   multimedia
     *
     *   headline
     *
     *   keywords
     *
     *   pub_date
     *
     *   document_type
     *
     *   news_desk
     *
     *   byline
     *
     *   type_of_material
     *
     *   _id
     *
     *   word_count"
     *
     */
    fl?: string;
    /**
     * "Filtered search query using standard Lucene syntax.
     *
     * @remarks
     *
     * The filter query can be specified with or without a limiting field: label.
     *
     * See Filtering Your Search for more information about filtering."
     *
     */
    fq?: string;
    /**
     * Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.
     *
     * @remarks
     *
     * Note: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."
     *
     */
    hl?: boolean;
    /**
     * "The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * Search query term. Search is performed on the article body, headline and byline.
     *
     * @remarks
     *
     */
    q?: string;
    /**
     * "By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."
     *
     * @remarks
     *
     */
    sort?: GetArticlesearchJsonSortEnum;
}
export declare class GetArticlesearchJson200ApplicationJSONResponseMeta extends SpeakeasyBase {
    hits?: number;
    offset?: number;
    time?: number;
}
export declare class GetArticlesearchJson200ApplicationJSONResponse extends SpeakeasyBase {
    docs?: shared.Doc[];
    meta?: GetArticlesearchJson200ApplicationJSONResponseMeta;
}
/**
 * The docs requested by the article search.
 */
export declare class GetArticlesearchJson200ApplicationJSON extends SpeakeasyBase {
    response?: GetArticlesearchJson200ApplicationJSONResponse;
}
export declare class GetArticlesearchJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The docs requested by the article search.
     */
    getArticlesearchJSON200ApplicationJSONObject?: GetArticlesearchJson200ApplicationJSON;
}
