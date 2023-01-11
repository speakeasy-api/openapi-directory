package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventReminder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public EventReminder withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minutes")
    public Integer minutes;
    public EventReminder withMinutes(Integer minutes) {
        this.minutes = minutes;
        return this;
    }
}