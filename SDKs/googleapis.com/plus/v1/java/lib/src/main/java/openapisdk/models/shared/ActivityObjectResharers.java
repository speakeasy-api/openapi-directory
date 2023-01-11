package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectResharers
 * People who reshared this activity.
**/
public class ActivityObjectResharers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public ActivityObjectResharers withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Long totalItems;
    public ActivityObjectResharers withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}