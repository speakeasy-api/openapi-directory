package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveUserFromAccount500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public RemoveUserFromAccount500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public RemoveUserFromAccount500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}