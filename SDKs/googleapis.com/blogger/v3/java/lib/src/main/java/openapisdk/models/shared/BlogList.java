package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BlogList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blogUserInfos")
    public BlogUserInfo[] blogUserInfos;
    public BlogList withBlogUserInfos(BlogUserInfo[] blogUserInfos) {
        this.blogUserInfos = blogUserInfos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public Blog[] items;
    public BlogList withItems(Blog[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BlogList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}