package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EmployeesResponse {
    @JsonProperty("data")
    public EmployeesResponseData[] data;
    public EmployeesResponse withData(EmployeesResponseData[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public EmployeesResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}