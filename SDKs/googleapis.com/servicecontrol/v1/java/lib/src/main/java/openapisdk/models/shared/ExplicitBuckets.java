package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExplicitBuckets
 * Describing buckets with arbitrary user-provided width.
**/
public class ExplicitBuckets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bounds")
    public Double[] bounds;
    public ExplicitBuckets withBounds(Double[] bounds) {
        this.bounds = bounds;
        return this;
    }
}