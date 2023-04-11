import { SpeakeasyBase } from "../../../internal/utils";
import { DailyResourceUsageAggregation } from "./dailyresourceusageaggregation";
/**
 * Performance data for an asset.
 */
export declare class AssetPerformanceData extends SpeakeasyBase {
    /**
     * Daily resource usage aggregations. Contains all of the data available for an asset, up to the last 420 days.
     */
    dailyResourceUsageAggregations?: DailyResourceUsageAggregation[];
}
