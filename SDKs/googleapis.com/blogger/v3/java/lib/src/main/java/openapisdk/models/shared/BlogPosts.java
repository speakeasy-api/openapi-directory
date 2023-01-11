package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlogPosts
 * The container of posts in this blog.
**/
public class BlogPosts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Post[] items;
    public BlogPosts withItems(Post[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public BlogPosts withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public BlogPosts withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}