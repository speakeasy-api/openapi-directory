package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Escalation
 * An escalation of a support case.
**/
public class Escalation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("justification")
    public String justification;
    public Escalation withJustification(String justification) {
        this.justification = justification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public EscalationReasonEnum reason;
    public Escalation withReason(EscalationReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}