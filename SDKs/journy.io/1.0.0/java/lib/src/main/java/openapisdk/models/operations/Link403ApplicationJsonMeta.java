package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link403ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public Link403ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public Link403ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}