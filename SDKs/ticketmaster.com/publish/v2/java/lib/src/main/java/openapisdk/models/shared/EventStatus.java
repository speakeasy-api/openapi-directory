package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventStatus
 * Event's Status
**/
public class EventStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public EventStatusCodeEnum code;
    public EventStatus withCode(EventStatusCodeEnum code) {
        this.code = code;
        return this;
    }
}