package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CategoricalStatsHistogramBucket
 * Histogram of value frequencies in the column.
**/
public class GooglePrivacyDlpV2CategoricalStatsHistogramBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public String bucketSize;
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket withBucketSize(String bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValueCount")
    public String bucketValueCount;
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket withBucketValueCount(String bucketValueCount) {
        this.bucketValueCount = bucketValueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValues")
    public GooglePrivacyDlpV2ValueFrequency[] bucketValues;
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket withBucketValues(GooglePrivacyDlpV2ValueFrequency[] bucketValues) {
        this.bucketValues = bucketValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueFrequencyLowerBound")
    public String valueFrequencyLowerBound;
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket withValueFrequencyLowerBound(String valueFrequencyLowerBound) {
        this.valueFrequencyLowerBound = valueFrequencyLowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueFrequencyUpperBound")
    public String valueFrequencyUpperBound;
    public GooglePrivacyDlpV2CategoricalStatsHistogramBucket withValueFrequencyUpperBound(String valueFrequencyUpperBound) {
        this.valueFrequencyUpperBound = valueFrequencyUpperBound;
        return this;
    }
}