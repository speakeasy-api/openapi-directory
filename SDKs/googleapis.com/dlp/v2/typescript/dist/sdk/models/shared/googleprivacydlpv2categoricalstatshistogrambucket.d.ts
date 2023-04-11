import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";
/**
 * Histogram of value frequencies in the column.
 */
export declare class GooglePrivacyDlpV2CategoricalStatsHistogramBucket extends SpeakeasyBase {
    /**
     * Total number of values in this bucket.
     */
    bucketSize?: string;
    /**
     * Total number of distinct values in this bucket.
     */
    bucketValueCount?: string;
    /**
     * Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20.
     */
    bucketValues?: GooglePrivacyDlpV2ValueFrequency[];
    /**
     * Lower bound on the value frequency of the values in this bucket.
     */
    valueFrequencyLowerBound?: string;
    /**
     * Upper bound on the value frequency of the values in this bucket.
     */
    valueFrequencyUpperBound?: string;
}
