package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetValidity200ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetValidity200ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetValidity200ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}