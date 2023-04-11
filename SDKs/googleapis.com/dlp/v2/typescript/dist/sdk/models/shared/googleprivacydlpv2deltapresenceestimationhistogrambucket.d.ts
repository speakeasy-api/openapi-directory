import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues } from "./googleprivacydlpv2deltapresenceestimationquasiidvalues";
/**
 * A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
 */
export declare class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket extends SpeakeasyBase {
    /**
     * Number of records within these probability bounds.
     */
    bucketSize?: string;
    /**
     * Total number of distinct quasi-identifier tuple values in this bucket.
     */
    bucketValueCount?: string;
    /**
     * Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[];
    /**
     * Always greater than or equal to min_probability.
     */
    maxProbability?: number;
    /**
     * Between 0 and 1.
     */
    minProbability?: number;
}
