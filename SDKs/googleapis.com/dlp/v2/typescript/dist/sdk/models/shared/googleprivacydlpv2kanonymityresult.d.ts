import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityHistogramBucket } from "./googleprivacydlpv2kanonymityhistogrambucket";
/**
 * Result of the k-anonymity computation.
 */
export declare class GooglePrivacyDlpV2KAnonymityResult extends SpeakeasyBase {
    /**
     * Histogram of k-anonymity equivalence classes.
     */
    equivalenceClassHistogramBuckets?: GooglePrivacyDlpV2KAnonymityHistogramBucket[];
}
