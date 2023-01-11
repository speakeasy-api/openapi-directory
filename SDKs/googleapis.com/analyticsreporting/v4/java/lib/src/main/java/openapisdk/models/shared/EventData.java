package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventData
 * Represents all the details pertaining to an event.
**/
public class EventData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventAction")
    public String eventAction;
    public EventData withEventAction(String eventAction) {
        this.eventAction = eventAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategory")
    public String eventCategory;
    public EventData withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCount")
    public String eventCount;
    public EventData withEventCount(String eventCount) {
        this.eventCount = eventCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventLabel")
    public String eventLabel;
    public EventData withEventLabel(String eventLabel) {
        this.eventLabel = eventLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventValue")
    public String eventValue;
    public EventData withEventValue(String eventValue) {
        this.eventValue = eventValue;
        return this;
    }
}