package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveABlock200ApplicationJsonParagraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public RetrieveABlock200ApplicationJsonParagraphText[] text;
    public RetrieveABlock200ApplicationJsonParagraph withText(RetrieveABlock200ApplicationJsonParagraphText[] text) {
        this.text = text;
        return this;
    }
}