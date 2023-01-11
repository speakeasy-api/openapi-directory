package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveUserFromAccount201ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public RemoveUserFromAccount201ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public RemoveUserFromAccount201ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}