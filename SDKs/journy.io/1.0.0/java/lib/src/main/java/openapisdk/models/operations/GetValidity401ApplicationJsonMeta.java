package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetValidity401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetValidity401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetValidity401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}