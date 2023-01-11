package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodesCommentCreateCommentAttributesInput
 * The properties of the comment entity.
**/
public class NodesCommentCreateCommentAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public NodesCommentCreateCommentAttributesInput withContent(String content) {
        this.content = content;
        return this;
    }
}