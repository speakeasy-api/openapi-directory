package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExponentialBuckets
 * Describing buckets with exponentially growing width.
**/
public class ExponentialBuckets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("growthFactor")
    public Double growthFactor;
    public ExponentialBuckets withGrowthFactor(Double growthFactor) {
        this.growthFactor = growthFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFiniteBuckets")
    public Integer numFiniteBuckets;
    public ExponentialBuckets withNumFiniteBuckets(Integer numFiniteBuckets) {
        this.numFiniteBuckets = numFiniteBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Double scale;
    public ExponentialBuckets withScale(Double scale) {
        this.scale = scale;
        return this;
    }
}