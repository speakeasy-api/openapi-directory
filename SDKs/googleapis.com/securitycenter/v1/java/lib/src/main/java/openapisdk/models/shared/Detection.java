package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Detection
 * Memory hash detection contributing to the binary family match.
**/
public class Detection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binary")
    public String binary;
    public Detection withBinary(String binary) {
        this.binary = binary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentPagesMatched")
    public Double percentPagesMatched;
    public Detection withPercentPagesMatched(Double percentPagesMatched) {
        this.percentPagesMatched = percentPagesMatched;
        return this;
    }
}