package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Linear
 * Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i). Lower bound (1 <= i < N): offset + (width * (i - 1)).
**/
public class Linear {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFiniteBuckets")
    public Integer numFiniteBuckets;
    public Linear withNumFiniteBuckets(Integer numFiniteBuckets) {
        this.numFiniteBuckets = numFiniteBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Double offset;
    public Linear withOffset(Double offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public Linear withWidth(Double width) {
        this.width = width;
        return this;
    }
}