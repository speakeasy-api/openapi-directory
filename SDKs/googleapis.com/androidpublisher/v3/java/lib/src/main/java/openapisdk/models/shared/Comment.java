package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Comment
 * An entry of conversation between user and developer.
**/
public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerComment")
    public DeveloperComment developerComment;
    public Comment withDeveloperComment(DeveloperComment developerComment) {
        this.developerComment = developerComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userComment")
    public UserComment userComment;
    public Comment withUserComment(UserComment userComment) {
        this.userComment = userComment;
        return this;
    }
}