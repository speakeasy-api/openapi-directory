import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsHistogramBucket } from "./googleprivacydlpv2categoricalstatshistogrambucket";
/**
 * Result of the categorical stats computation.
 */
export declare class GooglePrivacyDlpV2CategoricalStatsResult extends SpeakeasyBase {
    /**
     * Histogram of value frequencies in the column.
     */
    valueFrequencyHistogramBuckets?: GooglePrivacyDlpV2CategoricalStatsHistogramBucket[];
}
