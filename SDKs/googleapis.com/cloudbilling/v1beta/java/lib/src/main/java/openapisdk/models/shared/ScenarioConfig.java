package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScenarioConfig
 * Configuration for a CostScenario. Specifies how costs are calculated.
**/
public class ScenarioConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimateDuration")
    public String estimateDuration;
    public ScenarioConfig withEstimateDuration(String estimateDuration) {
        this.estimateDuration = estimateDuration;
        return this;
    }
}