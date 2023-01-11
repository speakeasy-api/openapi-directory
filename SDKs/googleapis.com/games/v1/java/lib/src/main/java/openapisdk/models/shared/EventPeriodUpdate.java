package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventPeriodUpdate
 * An event period update resource.
**/
public class EventPeriodUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventPeriodUpdate withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timePeriod")
    public EventPeriodRange timePeriod;
    public EventPeriodUpdate withTimePeriod(EventPeriodRange timePeriod) {
        this.timePeriod = timePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updates")
    public EventUpdateRequest[] updates;
    public EventPeriodUpdate withUpdates(EventUpdateRequest[] updates) {
        this.updates = updates;
        return this;
    }
}