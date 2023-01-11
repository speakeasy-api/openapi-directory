package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUserToAccount500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public AddUserToAccount500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public AddUserToAccount500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}