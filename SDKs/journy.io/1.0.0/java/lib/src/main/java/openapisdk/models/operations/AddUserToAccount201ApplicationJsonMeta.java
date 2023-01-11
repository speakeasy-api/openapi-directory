package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUserToAccount201ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public AddUserToAccount201ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public AddUserToAccount201ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}