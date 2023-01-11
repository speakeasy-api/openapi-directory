package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpsertAccount429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public UpsertAccount429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public UpsertAccount429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}