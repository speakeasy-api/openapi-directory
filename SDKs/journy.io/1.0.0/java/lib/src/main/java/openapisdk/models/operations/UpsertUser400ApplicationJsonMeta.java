package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertUser400ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertUser400ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertUser400ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}