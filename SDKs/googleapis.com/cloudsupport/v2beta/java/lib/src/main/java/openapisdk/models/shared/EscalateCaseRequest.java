package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EscalateCaseRequest
 * The request message for the EscalateCase endpoint.
**/
public class EscalateCaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("escalation")
    public Escalation escalation;
    public EscalateCaseRequest withEscalation(Escalation escalation) {
        this.escalation = escalation;
        return this;
    }
}