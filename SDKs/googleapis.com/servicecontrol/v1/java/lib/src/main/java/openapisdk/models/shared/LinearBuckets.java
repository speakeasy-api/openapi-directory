package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinearBuckets
 * Describing buckets with constant width.
**/
public class LinearBuckets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numFiniteBuckets")
    public Integer numFiniteBuckets;
    public LinearBuckets withNumFiniteBuckets(Integer numFiniteBuckets) {
        this.numFiniteBuckets = numFiniteBuckets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Double offset;
    public LinearBuckets withOffset(Double offset) {
        this.offset = offset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Double width;
    public LinearBuckets withWidth(Double width) {
        this.width = width;
        return this;
    }
}