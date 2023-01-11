package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeInfo
 * The employee info model
**/
public class EmployeeInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employeeId")
    public String employeeId;
    public EmployeeInfo withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusCode")
    public String statusCode;
    public EmployeeInfo withStatusCode(String statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusTypeCode")
    public String statusTypeCode;
    public EmployeeInfo withStatusTypeCode(String statusTypeCode) {
        this.statusTypeCode = statusTypeCode;
        return this;
    }
}