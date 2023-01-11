package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackJourneyEvent401ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public TrackJourneyEvent401ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public TrackJourneyEvent401ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}