package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveUserFromAccount401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public RemoveUserFromAccount401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public RemoveUserFromAccount401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}