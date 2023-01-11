package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentInput
 * A comment associated with a support case.
**/
public class CommentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public CommentInput withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public ActorInput creator;
    public CommentInput withCreator(ActorInput creator) {
        this.creator = creator;
        return this;
    }
}