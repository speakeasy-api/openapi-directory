package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectReplies
 * Comments in reply to this activity.
**/
public class ActivityObjectReplies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ActivityObjectReplies withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Long totalItems;
    public ActivityObjectReplies withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}