package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackJourneyEvent429ApplicationJsonMeta {
    @JsonProperty("requestId")
    public String requestId;
    public TrackJourneyEvent429ApplicationJsonMeta withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonProperty("status")
    public Double status;
    public TrackJourneyEvent429ApplicationJsonMeta withStatus(Double status) {
        this.status = status;
        return this;
    }
}