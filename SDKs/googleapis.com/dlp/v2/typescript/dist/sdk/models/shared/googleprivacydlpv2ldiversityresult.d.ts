import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityHistogramBucket } from "./googleprivacydlpv2ldiversityhistogrambucket";
/**
 * Result of the l-diversity computation.
 */
export declare class GooglePrivacyDlpV2LDiversityResult extends SpeakeasyBase {
    /**
     * Histogram of l-diversity equivalence class sensitive value frequencies.
     */
    sensitiveValueFrequencyHistogramBuckets?: GooglePrivacyDlpV2LDiversityHistogramBucket[];
}
