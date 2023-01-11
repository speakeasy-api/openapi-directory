package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCommentReplyRequestBody {
    @JsonProperty("text")
    public String text;
    public CreateCommentReplyRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}