package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCommentAlt1RequestBody {
    @JsonProperty("text")
    public String text;
    public CreateCommentAlt1RequestBody withText(String text) {
        this.text = text;
        return this;
    }
}