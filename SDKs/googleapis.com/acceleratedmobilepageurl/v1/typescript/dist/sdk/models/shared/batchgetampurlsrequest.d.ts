import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The lookup_strategy being requested.
 */
export declare enum BatchGetAmpUrlsRequestLookupStrategyEnum {
    FetchLiveDoc = "FETCH_LIVE_DOC",
    InIndexDoc = "IN_INDEX_DOC"
}
/**
 * AMP URL request for a batch of URLs.
 */
export declare class BatchGetAmpUrlsRequest extends SpeakeasyBase {
    /**
     * The lookup_strategy being requested.
     */
    lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategyEnum;
    /**
     * List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)).
     */
    urls?: string[];
}
