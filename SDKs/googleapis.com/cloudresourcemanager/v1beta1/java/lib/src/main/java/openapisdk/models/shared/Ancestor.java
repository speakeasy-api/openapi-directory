package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ancestor
 * Identifying information for a single ancestor of a project.
**/
public class Ancestor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public Ancestor withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}