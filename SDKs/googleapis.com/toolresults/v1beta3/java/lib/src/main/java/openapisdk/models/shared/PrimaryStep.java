package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrimaryStep
 * Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
**/
public class PrimaryStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualOutcome")
    public IndividualOutcome[] individualOutcome;
    public PrimaryStep withIndividualOutcome(IndividualOutcome[] individualOutcome) {
        this.individualOutcome = individualOutcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rollUp")
    public PrimaryStepRollUpEnum rollUp;
    public PrimaryStep withRollUp(PrimaryStepRollUpEnum rollUp) {
        this.rollUp = rollUp;
        return this;
    }
}