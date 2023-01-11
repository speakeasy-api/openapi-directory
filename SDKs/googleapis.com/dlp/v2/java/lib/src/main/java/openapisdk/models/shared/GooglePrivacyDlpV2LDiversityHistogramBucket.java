package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LDiversityHistogramBucket
 * Histogram of l-diversity equivalence class sensitive value frequencies.
**/
public class GooglePrivacyDlpV2LDiversityHistogramBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public String bucketSize;
    public GooglePrivacyDlpV2LDiversityHistogramBucket withBucketSize(String bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValueCount")
    public String bucketValueCount;
    public GooglePrivacyDlpV2LDiversityHistogramBucket withBucketValueCount(String bucketValueCount) {
        this.bucketValueCount = bucketValueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValues")
    public GooglePrivacyDlpV2LDiversityEquivalenceClass[] bucketValues;
    public GooglePrivacyDlpV2LDiversityHistogramBucket withBucketValues(GooglePrivacyDlpV2LDiversityEquivalenceClass[] bucketValues) {
        this.bucketValues = bucketValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveValueFrequencyLowerBound")
    public String sensitiveValueFrequencyLowerBound;
    public GooglePrivacyDlpV2LDiversityHistogramBucket withSensitiveValueFrequencyLowerBound(String sensitiveValueFrequencyLowerBound) {
        this.sensitiveValueFrequencyLowerBound = sensitiveValueFrequencyLowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitiveValueFrequencyUpperBound")
    public String sensitiveValueFrequencyUpperBound;
    public GooglePrivacyDlpV2LDiversityHistogramBucket withSensitiveValueFrequencyUpperBound(String sensitiveValueFrequencyUpperBound) {
        this.sensitiveValueFrequencyUpperBound = sensitiveValueFrequencyUpperBound;
        return this;
    }
}