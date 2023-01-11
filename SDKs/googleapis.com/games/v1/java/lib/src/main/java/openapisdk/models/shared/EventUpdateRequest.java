package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventUpdateRequest
 * An event period update resource.
**/
public class EventUpdateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definitionId")
    public String definitionId;
    public EventUpdateRequest withDefinitionId(String definitionId) {
        this.definitionId = definitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventUpdateRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateCount")
    public String updateCount;
    public EventUpdateRequest withUpdateCount(String updateCount) {
        this.updateCount = updateCount;
        return this;
    }
}