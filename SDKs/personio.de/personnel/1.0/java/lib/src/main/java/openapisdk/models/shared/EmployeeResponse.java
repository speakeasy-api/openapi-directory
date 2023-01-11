package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeeResponse {
    @JsonProperty("data")
    public EmployeeResponseData data;
    public EmployeeResponse withData(EmployeeResponseData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public EmployeeResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}