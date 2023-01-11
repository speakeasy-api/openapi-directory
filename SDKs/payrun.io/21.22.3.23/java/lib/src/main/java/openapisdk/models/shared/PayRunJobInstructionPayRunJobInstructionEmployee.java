package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayRunJobInstructionPayRunJobInstructionEmployee
 * The pay run job instructions' employees
**/
public class PayRunJobInstructionPayRunJobInstructionEmployee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Employee")
    public Object[] employee;
    public PayRunJobInstructionPayRunJobInstructionEmployee withEmployee(Object[] employee) {
        this.employee = employee;
        return this;
    }
}