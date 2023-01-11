package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrganizationActionBatchRequestBodyActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public java.util.Map<String, Object> body;
    public CreateOrganizationActionBatchRequestBodyActions withBody(java.util.Map<String, Object> body) {
        this.body = body;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateOrganizationActionBatchRequestBodyActions withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateOrganizationActionBatchRequestBodyActions withResource(String resource) {
        this.resource = resource;
        return this;
    }
}