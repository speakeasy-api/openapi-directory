package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BlogUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog")
    public Blog blog;
    public BlogUserInfo withBlog(Blog blog) {
        this.blog = blog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog_user_info")
    public BlogPerUserInfo blogUserInfo;
    public BlogUserInfo withBlogUserInfo(BlogPerUserInfo blogUserInfo) {
        this.blogUserInfo = blogUserInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BlogUserInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
}