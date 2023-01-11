package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PaginatedEmployeeResult {
    @JsonProperty("meta")
    public PaginatedEmployeeResultMeta meta;
    public PaginatedEmployeeResult withMeta(PaginatedEmployeeResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("response")
    public EmployeeResult[] response;
    public PaginatedEmployeeResult withResponse(EmployeeResult[] response) {
        this.response = response;
        return this;
    }
}