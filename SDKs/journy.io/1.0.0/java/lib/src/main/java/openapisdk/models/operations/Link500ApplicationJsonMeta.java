package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public Link500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public Link500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}