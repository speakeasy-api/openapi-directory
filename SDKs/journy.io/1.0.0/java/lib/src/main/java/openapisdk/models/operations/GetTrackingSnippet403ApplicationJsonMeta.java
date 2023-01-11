package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTrackingSnippet403ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetTrackingSnippet403ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetTrackingSnippet403ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}