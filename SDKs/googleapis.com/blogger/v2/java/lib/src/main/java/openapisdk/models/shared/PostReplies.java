package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostReplies
 * The container of comments on this Post.
**/
public class PostReplies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Comment[] items;
    public PostReplies withItems(Comment[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public PostReplies withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public String totalItems;
    public PostReplies withTotalItems(String totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}