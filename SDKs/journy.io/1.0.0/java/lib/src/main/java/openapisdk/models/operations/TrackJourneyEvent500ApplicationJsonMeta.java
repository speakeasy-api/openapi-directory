package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackJourneyEvent500ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public TrackJourneyEvent500ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public TrackJourneyEvent500ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}