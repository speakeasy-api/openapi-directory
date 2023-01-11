package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveUserFromAccount403ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public RemoveUserFromAccount403ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public RemoveUserFromAccount403ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}