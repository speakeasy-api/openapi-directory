import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.
 */
export declare enum GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamRequestSummaryRowSettingEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    NoSummaryRow = "NO_SUMMARY_ROW",
    SummaryRowWithResults = "SUMMARY_ROW_WITH_RESULTS",
    SummaryRowOnly = "SUMMARY_ROW_ONLY"
}
/**
 * Request message for SearchAds360Service.SearchStream.
 */
export declare class GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamRequest extends SpeakeasyBase {
    /**
     * The number of rows that are returned in each stream response batch. When too large batch is requested, the server may decide to further limit the number of returned rows.
     */
    batchSize?: number;
    /**
     * Required. The query string.
     */
    query?: string;
    /**
     * Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned.
     */
    summaryRowSetting?: GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamRequestSummaryRowSettingEnum;
}
