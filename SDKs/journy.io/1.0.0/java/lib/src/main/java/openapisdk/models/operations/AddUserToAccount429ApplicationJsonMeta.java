package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddUserToAccount429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public AddUserToAccount429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public AddUserToAccount429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}