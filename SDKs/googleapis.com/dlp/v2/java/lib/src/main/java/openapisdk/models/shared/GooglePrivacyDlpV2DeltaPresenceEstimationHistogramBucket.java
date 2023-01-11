package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
 * A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
**/
public class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public String bucketSize;
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket withBucketSize(String bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValueCount")
    public String bucketValueCount;
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket withBucketValueCount(String bucketValueCount) {
        this.bucketValueCount = bucketValueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValues")
    public GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[] bucketValues;
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket withBucketValues(GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[] bucketValues) {
        this.bucketValues = bucketValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxProbability")
    public Double maxProbability;
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket withMaxProbability(Double maxProbability) {
        this.maxProbability = maxProbability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minProbability")
    public Double minProbability;
    public GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket withMinProbability(Double minProbability) {
        this.minProbability = minProbability;
        return this;
    }
}