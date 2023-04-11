import { SpeakeasyBase } from "../../../internal/utils";
import { IndexUnusedReason } from "./indexunusedreason";
export declare class SearchStatistics extends SpeakeasyBase {
    /**
     * When index_usage_mode is UNUSED or PARTIALLY_USED, this field explains why index was not used in all or part of the search query. If index_usage_mode is FULLLY_USED, this field is not populated.
     */
    indexUnusedReason?: IndexUnusedReason[];
    /**
     * Specifies index usage mode for the query.
     */
    indexUsageMode?: string;
}
