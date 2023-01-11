package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventLink
 * A link to this audit event object if you were to retrieve it individually.
**/
public class EventLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public Object self;
    public EventLink withSelf(Object self) {
        this.self = self;
        return this;
    }
}