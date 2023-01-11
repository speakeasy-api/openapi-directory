package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketRange
 * Represents starting and ending value of a range in double.
**/
public class BucketRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public Double from;
    public BucketRange withFrom(Double from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public Double to;
    public BucketRange withTo(Double to) {
        this.to = to;
        return this;
    }
}