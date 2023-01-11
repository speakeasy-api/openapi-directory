package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputConfig
 * OutputConfig contains a destination for writing trace data.
**/
public class OutputConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public OutputConfig withDestination(String destination) {
        this.destination = destination;
        return this;
    }
}