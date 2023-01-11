package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyResourceConfigStep
 * Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
**/
public class OsPolicyResourceConfigStep {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public OsPolicyResourceConfigStep withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public OsPolicyResourceConfigStepOutcomeEnum outcome;
    public OsPolicyResourceConfigStep withOutcome(OsPolicyResourceConfigStepOutcomeEnum outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OsPolicyResourceConfigStepTypeEnum type;
    public OsPolicyResourceConfigStep withType(OsPolicyResourceConfigStepTypeEnum type) {
        this.type = type;
        return this;
    }
}