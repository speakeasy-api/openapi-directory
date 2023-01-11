package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EditCommentRequestBody {
    @JsonProperty("text")
    public String text;
    public EditCommentRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}