package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPersonDetailsDisability
 * Disability details (if applicable)
**/
public class EmployeeCreateRequestPersonDetailsDisability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communication")
    public Boolean communication;
    public EmployeeCreateRequestPersonDetailsDisability withCommunication(Boolean communication) {
        this.communication = communication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public EmployeeCreateRequestPersonDetailsDisability withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public EmployeeCreateRequestPersonDetailsDisability withReason(String reason) {
        this.reason = reason;
        return this;
    }
}