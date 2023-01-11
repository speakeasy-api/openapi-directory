package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeResponseData {
    @JsonProperty("attributes")
    public EmployeeResponseDataAttributes[] attributes;
    public EmployeeResponseData withAttributes(EmployeeResponseDataAttributes[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EmployeeResponseData withType(String type) {
        this.type = type;
        return this;
    }
}