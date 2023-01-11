package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LDiversityResult
 * Result of the l-diversity computation.
**/
public class GooglePrivacyDlpV2LDiversityResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveValueFrequencyHistogramBuckets")
    public GooglePrivacyDlpV2LDiversityHistogramBucket[] sensitiveValueFrequencyHistogramBuckets;
    public GooglePrivacyDlpV2LDiversityResult withSensitiveValueFrequencyHistogramBuckets(GooglePrivacyDlpV2LDiversityHistogramBucket[] sensitiveValueFrequencyHistogramBuckets) {
        this.sensitiveValueFrequencyHistogramBuckets = sensitiveValueFrequencyHistogramBuckets;
        return this;
    }
}