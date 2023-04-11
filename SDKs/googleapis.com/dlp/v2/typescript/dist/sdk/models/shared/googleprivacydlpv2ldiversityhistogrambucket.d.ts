import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityEquivalenceClass } from "./googleprivacydlpv2ldiversityequivalenceclass";
/**
 * Histogram of l-diversity equivalence class sensitive value frequencies.
 */
export declare class GooglePrivacyDlpV2LDiversityHistogramBucket extends SpeakeasyBase {
    /**
     * Total number of equivalence classes in this bucket.
     */
    bucketSize?: string;
    /**
     * Total number of distinct equivalence classes in this bucket.
     */
    bucketValueCount?: string;
    /**
     * Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20.
     */
    bucketValues?: GooglePrivacyDlpV2LDiversityEquivalenceClass[];
    /**
     * Lower bound on the sensitive value frequencies of the equivalence classes in this bucket.
     */
    sensitiveValueFrequencyLowerBound?: string;
    /**
     * Upper bound on the sensitive value frequencies of the equivalence classes in this bucket.
     */
    sensitiveValueFrequencyUpperBound?: string;
}
