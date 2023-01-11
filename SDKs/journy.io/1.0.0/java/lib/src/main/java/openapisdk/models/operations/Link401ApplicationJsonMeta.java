package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Link401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public Link401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public Link401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}