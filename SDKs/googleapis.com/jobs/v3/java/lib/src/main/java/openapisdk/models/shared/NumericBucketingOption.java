package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumericBucketingOption
 * Input only. Use this field to specify bucketing option for the histogram search response.
**/
public class NumericBucketingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketBounds")
    public Double[] bucketBounds;
    public NumericBucketingOption withBucketBounds(Double[] bucketBounds) {
        this.bucketBounds = bucketBounds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requiresMinMax")
    public Boolean requiresMinMax;
    public NumericBucketingOption withRequiresMinMax(Boolean requiresMinMax) {
        this.requiresMinMax = requiresMinMax;
        return this;
    }
}