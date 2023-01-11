package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventChild
 * An event child relationship resource.
**/
public class EventChild {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childId")
    public String childId;
    public EventChild withChildId(String childId) {
        this.childId = childId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventChild withKind(String kind) {
        this.kind = kind;
        return this;
    }
}