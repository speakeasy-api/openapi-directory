package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagedUserResponse
 * List Users Response Object
**/
public class PagedUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public UserResponse[] content;
    public PagedUserResponse withContent(UserResponse[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PagedUserResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PagedUserResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}