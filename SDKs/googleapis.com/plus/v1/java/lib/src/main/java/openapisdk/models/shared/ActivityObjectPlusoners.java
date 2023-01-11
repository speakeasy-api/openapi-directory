package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectPlusoners
 * People who +1'd this activity.
**/
public class ActivityObjectPlusoners {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ActivityObjectPlusoners withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Long totalItems;
    public ActivityObjectPlusoners withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}