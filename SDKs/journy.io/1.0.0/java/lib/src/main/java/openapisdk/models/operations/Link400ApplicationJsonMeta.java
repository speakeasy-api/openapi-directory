package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link400ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public Link400ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public Link400ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}