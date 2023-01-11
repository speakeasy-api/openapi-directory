package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlockRequestBodyParagraphText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateABlockRequestBodyParagraphTextText text;
    public UpdateABlockRequestBodyParagraphText withText(UpdateABlockRequestBodyParagraphTextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateABlockRequestBodyParagraphText withType(String type) {
        this.type = type;
        return this;
    }
}