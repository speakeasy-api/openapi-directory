import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.
 */
export declare enum GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    NoSummaryRow = "NO_SUMMARY_ROW",
    SummaryRowWithResults = "SUMMARY_ROW_WITH_RESULTS",
    SummaryRowOnly = "SUMMARY_ROW_ONLY"
}
/**
 * Request message for SearchAds360Service.Search.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360Request extends SpeakeasyBase {
    /**
     * Number of elements to retrieve in a single page. When too large a page is requested, the server may decide to further limit the number of returned resources.
     */
    pageSize?: number;
    /**
     * Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results.
     */
    pageToken?: string;
    /**
     * Required. The query string.
     */
    query?: string;
    /**
     * If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false.
     */
    returnTotalResultsCount?: boolean;
    /**
     * Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.
     */
    summaryRowSetting?: GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum;
    /**
     * If true, the request is validated but not executed.
     */
    validateOnly?: boolean;
}
