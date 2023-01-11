package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodesCommentCreateCommentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public NodesCommentCreateCommentAttributesInput attributes;
    public NodesCommentCreateCommentInput withAttributes(NodesCommentCreateCommentAttributesInput attributes) {
        this.attributes = attributes;
        return this;
    }
}