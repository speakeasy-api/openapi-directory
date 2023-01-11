package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertAccount500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertAccount500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertAccount500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}