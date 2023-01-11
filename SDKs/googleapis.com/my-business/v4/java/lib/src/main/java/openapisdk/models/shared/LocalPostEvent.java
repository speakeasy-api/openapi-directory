package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocalPostEvent
 * All the information pertaining to an event featured in a local post.
**/
public class LocalPostEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public TimeInterval schedule;
    public LocalPostEvent withSchedule(TimeInterval schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public LocalPostEvent withTitle(String title) {
        this.title = title;
        return this;
    }
}