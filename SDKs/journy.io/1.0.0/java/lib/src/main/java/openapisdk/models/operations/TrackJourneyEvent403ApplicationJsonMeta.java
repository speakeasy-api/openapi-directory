package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackJourneyEvent403ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public TrackJourneyEvent403ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public TrackJourneyEvent403ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}