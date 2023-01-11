package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumericBucketingResult
 * Output only. Custom numeric bucketing result.
**/
public class NumericBucketingResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("counts")
    public BucketizedCount[] counts;
    public NumericBucketingResult withCounts(BucketizedCount[] counts) {
        this.counts = counts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValue")
    public Double maxValue;
    public NumericBucketingResult withMaxValue(Double maxValue) {
        this.maxValue = maxValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minValue")
    public Double minValue;
    public NumericBucketingResult withMinValue(Double minValue) {
        this.minValue = minValue;
        return this;
    }
}