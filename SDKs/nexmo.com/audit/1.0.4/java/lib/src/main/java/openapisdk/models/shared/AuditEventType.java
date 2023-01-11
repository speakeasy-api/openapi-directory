package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditEventType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AuditEventType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EventTypesEnum type;
    public AuditEventType withType(EventTypesEnum type) {
        this.type = type;
        return this;
    }
}