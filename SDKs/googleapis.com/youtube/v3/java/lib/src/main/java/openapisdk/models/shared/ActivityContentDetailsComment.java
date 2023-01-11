package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsComment
 * Information about a resource that received a comment.
**/
public class ActivityContentDetailsComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsComment withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}