package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IterativeCalculationSettings
 * Settings to control how circular dependencies are resolved with iterative calculation.
**/
public class IterativeCalculationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("convergenceThreshold")
    public Double convergenceThreshold;
    public IterativeCalculationSettings withConvergenceThreshold(Double convergenceThreshold) {
        this.convergenceThreshold = convergenceThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxIterations")
    public Integer maxIterations;
    public IterativeCalculationSettings withMaxIterations(Integer maxIterations) {
        this.maxIterations = maxIterations;
        return this;
    }
}