package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTargetsAllAverageFixTime200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("high")
    public Long high;
    public GetTargetsAllAverageFixTime200ApplicationJsonResults withHigh(Long high) {
        this.high = high;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("low")
    public Long low;
    public GetTargetsAllAverageFixTime200ApplicationJsonResults withLow(Long low) {
        this.low = low;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("medium")
    public Long medium;
    public GetTargetsAllAverageFixTime200ApplicationJsonResults withMedium(Long medium) {
        this.medium = medium;
        return this;
    }
}