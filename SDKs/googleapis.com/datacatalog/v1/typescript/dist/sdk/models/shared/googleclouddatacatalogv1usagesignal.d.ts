import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CommonUsageStats } from "./googleclouddatacatalogv1commonusagestats";
import { GoogleCloudDatacatalogV1UsageStats } from "./googleclouddatacatalogv1usagestats";
/**
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
 */
export declare class GoogleCloudDatacatalogV1UsageSignal extends SpeakeasyBase {
    /**
     * Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`.
     */
    commonUsageWithinTimeRange?: Record<string, GoogleCloudDatacatalogV1CommonUsageStats>;
    /**
     * Favorite count in the source system.
     */
    favoriteCount?: string;
    /**
     * The end timestamp of the duration of usage statistics.
     */
    updateTime?: string;
    /**
     * Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`.
     */
    usageWithinTimeRange?: Record<string, GoogleCloudDatacatalogV1UsageStats>;
}
/**
 * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
 */
export declare class GoogleCloudDatacatalogV1UsageSignalInput extends SpeakeasyBase {
    /**
     * Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`.
     */
    commonUsageWithinTimeRange?: Record<string, GoogleCloudDatacatalogV1CommonUsageStats>;
    /**
     * Favorite count in the source system.
     */
    favoriteCount?: string;
    /**
     * The end timestamp of the duration of usage statistics.
     */
    updateTime?: string;
}
