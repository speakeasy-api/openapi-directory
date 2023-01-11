package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertUser401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertUser401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertUser401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}