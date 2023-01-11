package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetValidity403ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetValidity403ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetValidity403ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}