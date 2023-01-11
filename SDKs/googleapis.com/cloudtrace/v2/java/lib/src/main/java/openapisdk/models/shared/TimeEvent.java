package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeEvent
 * A time-stamped annotation or message event in the Span.
**/
public class TimeEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Annotation annotation;
    public TimeEvent withAnnotation(Annotation annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageEvent")
    public MessageEvent messageEvent;
    public TimeEvent withMessageEvent(MessageEvent messageEvent) {
        this.messageEvent = messageEvent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public TimeEvent withTime(String time) {
        this.time = time;
        return this;
    }
}