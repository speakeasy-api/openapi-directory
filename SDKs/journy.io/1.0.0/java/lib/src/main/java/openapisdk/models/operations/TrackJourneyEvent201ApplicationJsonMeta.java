package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackJourneyEvent201ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public TrackJourneyEvent201ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public TrackJourneyEvent201ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}