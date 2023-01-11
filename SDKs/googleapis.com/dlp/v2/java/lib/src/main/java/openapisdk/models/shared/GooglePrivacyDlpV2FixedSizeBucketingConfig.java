package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2FixedSizeBucketingConfig
 * Buckets values based on fixed size ranges. The Bucketing transformation can provide all of this functionality, but requires more configuration. This message is provided as a convenience to the user for simple bucketing strategies. The transformed value will be a hyphenated string of {lower_bound}-{upper_bound}. For example, if lower_bound = 10 and upper_bound = 20, all values that are within this bucket will be replaced with "10-20". This can be used on data of type: double, long. If the bound Value type differs from the type of data being transformed, we will first attempt converting the type of the data to be transformed to match the type of the bound before comparing. See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
**/
public class GooglePrivacyDlpV2FixedSizeBucketingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketSize")
    public Double bucketSize;
    public GooglePrivacyDlpV2FixedSizeBucketingConfig withBucketSize(Double bucketSize) {
        this.bucketSize = bucketSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowerBound")
    public GooglePrivacyDlpV2Value lowerBound;
    public GooglePrivacyDlpV2FixedSizeBucketingConfig withLowerBound(GooglePrivacyDlpV2Value lowerBound) {
        this.lowerBound = lowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upperBound")
    public GooglePrivacyDlpV2Value upperBound;
    public GooglePrivacyDlpV2FixedSizeBucketingConfig withUpperBound(GooglePrivacyDlpV2Value upperBound) {
        this.upperBound = upperBound;
        return this;
    }
}