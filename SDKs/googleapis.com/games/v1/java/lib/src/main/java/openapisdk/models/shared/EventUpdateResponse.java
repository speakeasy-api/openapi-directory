package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventUpdateResponse
 * An event period update resource.
**/
public class EventUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchFailures")
    public EventBatchRecordFailure[] batchFailures;
    public EventUpdateResponse withBatchFailures(EventBatchRecordFailure[] batchFailures) {
        this.batchFailures = batchFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventFailures")
    public EventRecordFailure[] eventFailures;
    public EventUpdateResponse withEventFailures(EventRecordFailure[] eventFailures) {
        this.eventFailures = eventFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventUpdateResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playerEvents")
    public PlayerEvent[] playerEvents;
    public EventUpdateResponse withPlayerEvents(PlayerEvent[] playerEvents) {
        this.playerEvents = playerEvents;
        return this;
    }
}