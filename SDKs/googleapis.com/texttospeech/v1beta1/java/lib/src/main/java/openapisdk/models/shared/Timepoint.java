package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Timepoint
 * This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
**/
public class Timepoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("markName")
    public String markName;
    public Timepoint withMarkName(String markName) {
        this.markName = markName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeSeconds")
    public Double timeSeconds;
    public Timepoint withTimeSeconds(Double timeSeconds) {
        this.timeSeconds = timeSeconds;
        return this;
    }
}