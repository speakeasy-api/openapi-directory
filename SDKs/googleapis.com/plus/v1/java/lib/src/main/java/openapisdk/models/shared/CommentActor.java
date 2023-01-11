package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentActor
 * The person who posted this comment.
**/
public class CommentActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSpecificActorInfo")
    public CommentActorClientSpecificActorInfo clientSpecificActorInfo;
    public CommentActor withClientSpecificActorInfo(CommentActorClientSpecificActorInfo clientSpecificActorInfo) {
        this.clientSpecificActorInfo = clientSpecificActorInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public CommentActor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CommentActor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public CommentActorImage image;
    public CommentActor withImage(CommentActorImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CommentActor withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification")
    public CommentActorVerification verification;
    public CommentActor withVerification(CommentActorVerification verification) {
        this.verification = verification;
        return this;
    }
}