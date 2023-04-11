import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityEquivalenceClass } from "./googleprivacydlpv2kanonymityequivalenceclass";
/**
 * Histogram of k-anonymity equivalence classes.
 */
export declare class GooglePrivacyDlpV2KAnonymityHistogramBucket extends SpeakeasyBase {
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
    bucketValues?: GooglePrivacyDlpV2KAnonymityEquivalenceClass[];
    /**
     * Lower bound on the size of the equivalence classes in this bucket.
     */
    equivalenceClassSizeLowerBound?: string;
    /**
     * Upper bound on the size of the equivalence classes in this bucket.
     */
    equivalenceClassSizeUpperBound?: string;
}
