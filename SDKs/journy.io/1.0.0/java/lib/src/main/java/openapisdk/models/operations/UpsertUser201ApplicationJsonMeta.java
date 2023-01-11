package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertUser201ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertUser201ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertUser201ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}