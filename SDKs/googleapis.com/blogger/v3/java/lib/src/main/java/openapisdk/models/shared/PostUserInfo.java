package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostUserInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostUserInfo withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post")
    public Post post;
    public PostUserInfo withPost(Post post) {
        this.post = post;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_user_info")
    public PostPerUserInfo postUserInfo;
    public PostUserInfo withPostUserInfo(PostPerUserInfo postUserInfo) {
        this.postUserInfo = postUserInfo;
        return this;
    }
}