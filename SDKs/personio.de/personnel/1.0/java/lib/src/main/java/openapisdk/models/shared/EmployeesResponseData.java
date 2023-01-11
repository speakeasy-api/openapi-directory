package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeesResponseData {
    @JsonProperty("attributes")
    public EmployeesResponseDataAttributes[] attributes;
    public EmployeesResponseData withAttributes(EmployeesResponseDataAttributes[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EmployeesResponseData withType(String type) {
        this.type = type;
        return this;
    }
}