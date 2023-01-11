package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertAccount401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertAccount401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertAccount401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}