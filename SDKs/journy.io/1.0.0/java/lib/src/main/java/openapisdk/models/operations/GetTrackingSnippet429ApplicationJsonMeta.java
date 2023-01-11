package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTrackingSnippet429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public GetTrackingSnippet429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public GetTrackingSnippet429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}