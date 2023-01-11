package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeSecret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmployeeSecret")
    public EmployeeSecretEmployeeSecret employeeSecret;
    public EmployeeSecret withEmployeeSecret(EmployeeSecretEmployeeSecret employeeSecret) {
        this.employeeSecret = employeeSecret;
        return this;
    }
}