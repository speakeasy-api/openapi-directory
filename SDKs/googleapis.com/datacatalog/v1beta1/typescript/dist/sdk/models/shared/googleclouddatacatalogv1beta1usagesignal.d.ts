import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1UsageStats } from "./googleclouddatacatalogv1beta1usagestats";
/**
 * The set of all usage signals that we store in Data Catalog.
 */
export declare class GoogleCloudDatacatalogV1beta1UsageSignal extends SpeakeasyBase {
    /**
     * The timestamp of the end of the usage statistics duration.
     */
    updateTime?: string;
    /**
     * Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {"24H", "7D", "30D"}.
     */
    usageWithinTimeRange?: Record<string, GoogleCloudDatacatalogV1beta1UsageStats>;
}
