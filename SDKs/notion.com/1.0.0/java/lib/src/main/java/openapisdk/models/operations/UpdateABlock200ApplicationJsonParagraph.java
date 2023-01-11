package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlock200ApplicationJsonParagraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateABlock200ApplicationJsonParagraphText[] text;
    public UpdateABlock200ApplicationJsonParagraph withText(UpdateABlock200ApplicationJsonParagraphText[] text) {
        this.text = text;
        return this;
    }
}