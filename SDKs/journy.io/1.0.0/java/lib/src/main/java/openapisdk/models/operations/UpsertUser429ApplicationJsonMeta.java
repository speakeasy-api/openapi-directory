package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertUser429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertUser429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertUser429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}