package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditRespEmbedded
 * Container containing the `events` array.
**/
public class AuditRespEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public AuditEvent[] events;
    public AuditRespEmbedded withEvents(AuditEvent[] events) {
        this.events = events;
        return this;
    }
}