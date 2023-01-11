package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndividualOutcome
 * Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
**/
public class IndividualOutcome {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multistepNumber")
    public Integer multistepNumber;
    public IndividualOutcome withMultistepNumber(Integer multistepNumber) {
        this.multistepNumber = multistepNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcomeSummary")
    public IndividualOutcomeOutcomeSummaryEnum outcomeSummary;
    public IndividualOutcome withOutcomeSummary(IndividualOutcomeOutcomeSummaryEnum outcomeSummary) {
        this.outcomeSummary = outcomeSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runDuration")
    public Duration runDuration;
    public IndividualOutcome withRunDuration(Duration runDuration) {
        this.runDuration = runDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public IndividualOutcome withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
}