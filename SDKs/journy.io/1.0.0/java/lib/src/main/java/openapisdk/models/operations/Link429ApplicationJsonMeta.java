package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public Link429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public Link429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}