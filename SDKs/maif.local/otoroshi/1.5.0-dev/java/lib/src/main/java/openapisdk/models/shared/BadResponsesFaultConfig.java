package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BadResponsesFaultConfig
 * Config for bad requests injection fault
**/
public class BadResponsesFaultConfig {
    @JsonProperty("ratio")
    public Double ratio;
    public BadResponsesFaultConfig withRatio(Double ratio) {
        this.ratio = ratio;
        return this;
    }
    @JsonProperty("responses")
    public BadResponse[] responses;
    public BadResponsesFaultConfig withResponses(BadResponse[] responses) {
        this.responses = responses;
        return this;
    }
}