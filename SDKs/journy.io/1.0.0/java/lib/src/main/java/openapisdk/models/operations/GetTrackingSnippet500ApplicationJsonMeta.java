package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTrackingSnippet500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetTrackingSnippet500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetTrackingSnippet500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}