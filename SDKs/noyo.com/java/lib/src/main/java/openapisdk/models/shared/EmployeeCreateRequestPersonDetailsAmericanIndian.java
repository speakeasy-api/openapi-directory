package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeCreateRequestPersonDetailsAmericanIndian
 * American Indian status details (if applicable)
**/
public class EmployeeCreateRequestPersonDetailsAmericanIndian {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum state;
    public EmployeeCreateRequestPersonDetailsAmericanIndian withState(EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tribe")
    public String tribe;
    public EmployeeCreateRequestPersonDetailsAmericanIndian withTribe(String tribe) {
        this.tribe = tribe;
        return this;
    }
}