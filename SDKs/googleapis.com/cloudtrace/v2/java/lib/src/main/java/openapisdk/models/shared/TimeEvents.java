package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeEvents
 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation on the span, consisting of either user-supplied key:value pairs, or details of a message sent/received between Spans.
**/
public class TimeEvents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedAnnotationsCount")
    public Integer droppedAnnotationsCount;
    public TimeEvents withDroppedAnnotationsCount(Integer droppedAnnotationsCount) {
        this.droppedAnnotationsCount = droppedAnnotationsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droppedMessageEventsCount")
    public Integer droppedMessageEventsCount;
    public TimeEvents withDroppedMessageEventsCount(Integer droppedMessageEventsCount) {
        this.droppedMessageEventsCount = droppedMessageEventsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeEvent")
    public TimeEvent[] timeEvent;
    public TimeEvents withTimeEvent(TimeEvent[] timeEvent) {
        this.timeEvent = timeEvent;
        return this;
    }
}