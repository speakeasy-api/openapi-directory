package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCommentRequestBody {
    @JsonProperty("text")
    public String text;
    public CreateCommentRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}