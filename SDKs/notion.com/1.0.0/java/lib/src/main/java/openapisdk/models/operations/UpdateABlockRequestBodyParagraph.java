package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlockRequestBodyParagraph {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateABlockRequestBodyParagraphText[] text;
    public UpdateABlockRequestBodyParagraph withText(UpdateABlockRequestBodyParagraphText[] text) {
        this.text = text;
        return this;
    }
}