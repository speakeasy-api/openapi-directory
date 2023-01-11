package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeResultPersonDetailsDisability
 * Disability details (if applicable)
**/
public class EmployeeResultPersonDetailsDisability {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communication")
    public Boolean communication;
    public EmployeeResultPersonDetailsDisability withCommunication(Boolean communication) {
        this.communication = communication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public EmployeeResultPersonDetailsDisability withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public EmployeeResultPersonDetailsDisability withReason(String reason) {
        this.reason = reason;
        return this;
    }
}