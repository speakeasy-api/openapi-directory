package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlogPages
 * The container of pages in this blog.
**/
public class BlogPages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public BlogPages withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Integer totalItems;
    public BlogPages withTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}