package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditEventTypesResp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypes")
    public AuditEventType[] eventTypes;
    public AuditEventTypesResp withEventTypes(AuditEventType[] eventTypes) {
        this.eventTypes = eventTypes;
        return this;
    }
}