package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsBulletin
 * Details about a channel bulletin post.
**/
public class ActivityContentDetailsBulletin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsBulletin withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}