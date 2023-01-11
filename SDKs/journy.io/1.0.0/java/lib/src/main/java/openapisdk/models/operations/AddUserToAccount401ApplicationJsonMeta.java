package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUserToAccount401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public AddUserToAccount401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public AddUserToAccount401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}