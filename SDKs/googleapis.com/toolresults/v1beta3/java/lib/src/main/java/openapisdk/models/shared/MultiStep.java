package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MultiStep
 * Details when multiple steps are run with the same configuration as a group.
**/
public class MultiStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multistepNumber")
    public Integer multistepNumber;
    public MultiStep withMultistepNumber(Integer multistepNumber) {
        this.multistepNumber = multistepNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryStep")
    public PrimaryStep primaryStep;
    public MultiStep withPrimaryStep(PrimaryStep primaryStep) {
        this.primaryStep = primaryStep;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryStepId")
    public String primaryStepId;
    public MultiStep withPrimaryStepId(String primaryStepId) {
        this.primaryStepId = primaryStepId;
        return this;
    }
}