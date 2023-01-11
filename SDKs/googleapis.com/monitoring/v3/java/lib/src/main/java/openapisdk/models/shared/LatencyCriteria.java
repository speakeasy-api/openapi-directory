package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LatencyCriteria
 * Parameters for a latency threshold SLI.
**/
public class LatencyCriteria {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threshold")
    public String threshold;
    public LatencyCriteria withThreshold(String threshold) {
        this.threshold = threshold;
        return this;
    }
}