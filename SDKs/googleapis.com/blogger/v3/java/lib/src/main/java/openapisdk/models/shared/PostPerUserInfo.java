package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPerUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blogId")
    public String blogId;
    public PostPerUserInfo withBlogId(String blogId) {
        this.blogId = blogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasEditAccess")
    public Boolean hasEditAccess;
    public PostPerUserInfo withHasEditAccess(Boolean hasEditAccess) {
        this.hasEditAccess = hasEditAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostPerUserInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postId")
    public String postId;
    public PostPerUserInfo withPostId(String postId) {
        this.postId = postId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public PostPerUserInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}