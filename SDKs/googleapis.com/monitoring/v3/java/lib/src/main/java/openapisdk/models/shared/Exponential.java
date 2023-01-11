package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Exponential
 * Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i). Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).
**/
public class Exponential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("growthFactor")
    public Double growthFactor;
    public Exponential withGrowthFactor(Double growthFactor) {
        this.growthFactor = growthFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFiniteBuckets")
    public Integer numFiniteBuckets;
    public Exponential withNumFiniteBuckets(Integer numFiniteBuckets) {
        this.numFiniteBuckets = numFiniteBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
    public Double scale;
    public Exponential withScale(Double scale) {
        this.scale = scale;
        return this;
    }
}