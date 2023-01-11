package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventsResetMultipleForAllRequest
 * Multiple events reset all request.
**/
public class EventsResetMultipleForAllRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_ids")
    public String[] eventIds;
    public EventsResetMultipleForAllRequest withEventIds(String[] eventIds) {
        this.eventIds = eventIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventsResetMultipleForAllRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
}