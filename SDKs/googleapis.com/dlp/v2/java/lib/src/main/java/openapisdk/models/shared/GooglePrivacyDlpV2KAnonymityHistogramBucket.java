package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2KAnonymityHistogramBucket
 * Histogram of k-anonymity equivalence classes.
**/
public class GooglePrivacyDlpV2KAnonymityHistogramBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public String bucketSize;
    public GooglePrivacyDlpV2KAnonymityHistogramBucket withBucketSize(String bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValueCount")
    public String bucketValueCount;
    public GooglePrivacyDlpV2KAnonymityHistogramBucket withBucketValueCount(String bucketValueCount) {
        this.bucketValueCount = bucketValueCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketValues")
    public GooglePrivacyDlpV2KAnonymityEquivalenceClass[] bucketValues;
    public GooglePrivacyDlpV2KAnonymityHistogramBucket withBucketValues(GooglePrivacyDlpV2KAnonymityEquivalenceClass[] bucketValues) {
        this.bucketValues = bucketValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalenceClassSizeLowerBound")
    public String equivalenceClassSizeLowerBound;
    public GooglePrivacyDlpV2KAnonymityHistogramBucket withEquivalenceClassSizeLowerBound(String equivalenceClassSizeLowerBound) {
        this.equivalenceClassSizeLowerBound = equivalenceClassSizeLowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalenceClassSizeUpperBound")
    public String equivalenceClassSizeUpperBound;
    public GooglePrivacyDlpV2KAnonymityHistogramBucket withEquivalenceClassSizeUpperBound(String equivalenceClassSizeUpperBound) {
        this.equivalenceClassSizeUpperBound = equivalenceClassSizeUpperBound;
        return this;
    }
}