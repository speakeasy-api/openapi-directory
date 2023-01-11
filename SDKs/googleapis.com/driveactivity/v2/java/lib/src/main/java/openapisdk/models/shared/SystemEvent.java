package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SystemEvent
 * Event triggered by system operations instead of end users.
**/
public class SystemEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SystemEventTypeEnum type;
    public SystemEvent withType(SystemEventTypeEnum type) {
        this.type = type;
        return this;
    }
}