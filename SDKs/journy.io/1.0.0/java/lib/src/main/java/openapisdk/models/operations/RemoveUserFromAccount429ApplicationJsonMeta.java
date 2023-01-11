package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveUserFromAccount429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public RemoveUserFromAccount429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public RemoveUserFromAccount429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}