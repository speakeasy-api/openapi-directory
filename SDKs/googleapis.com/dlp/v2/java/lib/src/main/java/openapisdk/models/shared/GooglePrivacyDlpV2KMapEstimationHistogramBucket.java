package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KMapEstimationHistogramBucket
 * A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
**/
public class GooglePrivacyDlpV2KMapEstimationHistogramBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public String bucketSize;
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket withBucketSize(String bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValueCount")
    public String bucketValueCount;
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket withBucketValueCount(String bucketValueCount) {
        this.bucketValueCount = bucketValueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValues")
    public GooglePrivacyDlpV2KMapEstimationQuasiIdValues[] bucketValues;
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket withBucketValues(GooglePrivacyDlpV2KMapEstimationQuasiIdValues[] bucketValues) {
        this.bucketValues = bucketValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxAnonymity")
    public String maxAnonymity;
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket withMaxAnonymity(String maxAnonymity) {
        this.maxAnonymity = maxAnonymity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minAnonymity")
    public String minAnonymity;
    public GooglePrivacyDlpV2KMapEstimationHistogramBucket withMinAnonymity(String minAnonymity) {
        this.minAnonymity = minAnonymity;
        return this;
    }
}