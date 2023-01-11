package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightsValue
 * Represents an insights value.
**/
public class InsightsValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("threshold")
    public String threshold;
    public InsightsValue withThreshold(String threshold) {
        this.threshold = threshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public InsightsValue withValue(String value) {
        this.value = value;
        return this;
    }
}