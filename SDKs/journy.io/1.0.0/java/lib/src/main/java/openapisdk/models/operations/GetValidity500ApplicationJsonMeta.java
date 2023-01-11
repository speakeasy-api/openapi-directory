package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetValidity500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetValidity500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetValidity500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}