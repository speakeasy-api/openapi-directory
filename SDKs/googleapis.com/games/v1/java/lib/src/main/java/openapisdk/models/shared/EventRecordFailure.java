package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventRecordFailure
 * An event update failure resource.
**/
public class EventRecordFailure {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public EventRecordFailure withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCause")
    public EventRecordFailureFailureCauseEnum failureCause;
    public EventRecordFailure withFailureCause(EventRecordFailureFailureCauseEnum failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventRecordFailure withKind(String kind) {
        this.kind = kind;
        return this;
    }
}