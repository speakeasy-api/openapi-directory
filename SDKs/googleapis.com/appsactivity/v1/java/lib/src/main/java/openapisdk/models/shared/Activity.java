package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Activity
 * An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
**/
public class Activity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combinedEvent")
    public Event combinedEvent;
    public Activity withCombinedEvent(Event combinedEvent) {
        this.combinedEvent = combinedEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("singleEvents")
    public Event[] singleEvents;
    public Activity withSingleEvents(Event[] singleEvents) {
        this.singleEvents = singleEvents;
        return this;
    }
}