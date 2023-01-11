package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeEditRequestPersonDetailsAmericanIndian
 * American Indian status details (if applicable)
**/
public class EmployeeEditRequestPersonDetailsAmericanIndian {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public EmployeeEditRequestPersonDetailsAmericanIndianStateEnum state;
    public EmployeeEditRequestPersonDetailsAmericanIndian withState(EmployeeEditRequestPersonDetailsAmericanIndianStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tribe")
    public String tribe;
    public EmployeeEditRequestPersonDetailsAmericanIndian withTribe(String tribe) {
        this.tribe = tribe;
        return this;
    }
}