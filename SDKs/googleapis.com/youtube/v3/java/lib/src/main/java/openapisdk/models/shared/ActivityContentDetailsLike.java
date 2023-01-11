package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsLike
 * Information about a resource that received a positive (like) rating.
**/
public class ActivityContentDetailsLike {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsLike withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}