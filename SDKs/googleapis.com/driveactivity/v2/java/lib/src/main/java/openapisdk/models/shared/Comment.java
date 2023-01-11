package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Comment
 * A change about comments on an object.
**/
public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public Assignment assignment;
    public Comment withAssignment(Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mentionedUsers")
    public User[] mentionedUsers;
    public Comment withMentionedUsers(User[] mentionedUsers) {
        this.mentionedUsers = mentionedUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post")
    public Post post;
    public Comment withPost(Post post) {
        this.post = post;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestion")
    public Suggestion suggestion;
    public Comment withSuggestion(Suggestion suggestion) {
        this.suggestion = suggestion;
        return this;
    }
}