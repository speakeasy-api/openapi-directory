package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUserToAccount400ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public AddUserToAccount400ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public AddUserToAccount400ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}