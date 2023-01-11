package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeIdResponse
 * The EmployeeId Response Model
**/
public class EmployeeIdResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeId")
    public String employeeId;
    public EmployeeIdResponse withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
}