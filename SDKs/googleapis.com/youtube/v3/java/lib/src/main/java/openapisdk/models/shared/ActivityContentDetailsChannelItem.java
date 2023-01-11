package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsChannelItem
 * Details about a resource which was added to a channel.
**/
public class ActivityContentDetailsChannelItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsChannelItem withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}