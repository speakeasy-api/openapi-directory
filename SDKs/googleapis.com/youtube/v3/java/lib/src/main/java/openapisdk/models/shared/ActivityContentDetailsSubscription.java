package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityContentDetailsSubscription
 * Information about a channel that a user subscribed to.
**/
public class ActivityContentDetailsSubscription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceId")
    public ResourceId resourceId;
    public ActivityContentDetailsSubscription withResourceId(ResourceId resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}