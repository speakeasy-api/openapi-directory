package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PullResponse
 * Either a PubsubMessage or a truncation event. One of these two must be populated.
**/
public class PullResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ackId")
    public String ackId;
    public PullResponse withAckId(String ackId) {
        this.ackId = ackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubEvent")
    public PubsubEvent pubsubEvent;
    public PullResponse withPubsubEvent(PubsubEvent pubsubEvent) {
        this.pubsubEvent = pubsubEvent;
        return this;
    }
}