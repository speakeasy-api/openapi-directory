package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsFavorite
 * Information about a video that was marked as a favorite video.
**/
public class ActivityContentDetailsFavorite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsFavorite withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}