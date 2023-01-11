package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonDetailsDisability
 * Disability details (if applicable)
**/
public class EmployeeEditRequestPersonDetailsDisability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communication")
    public Boolean communication;
    public EmployeeEditRequestPersonDetailsDisability withCommunication(Boolean communication) {
        this.communication = communication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public EmployeeEditRequestPersonDetailsDisability withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public EmployeeEditRequestPersonDetailsDisability withReason(String reason) {
        this.reason = reason;
        return this;
    }
}