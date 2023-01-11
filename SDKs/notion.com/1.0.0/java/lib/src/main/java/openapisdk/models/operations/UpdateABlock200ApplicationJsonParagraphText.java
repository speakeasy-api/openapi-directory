package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlock200ApplicationJsonParagraphText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations annotations;
    public UpdateABlock200ApplicationJsonParagraphText withAnnotations(UpdateABlock200ApplicationJsonParagraphTextAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public UpdateABlock200ApplicationJsonParagraphText withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public UpdateABlock200ApplicationJsonParagraphText withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public UpdateABlock200ApplicationJsonParagraphTextText text;
    public UpdateABlock200ApplicationJsonParagraphText withText(UpdateABlock200ApplicationJsonParagraphTextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateABlock200ApplicationJsonParagraphText withType(String type) {
        this.type = type;
        return this;
    }
}