package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveABlock200ApplicationJsonParagraphText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public RetrieveABlock200ApplicationJsonParagraphTextAnnotations annotations;
    public RetrieveABlock200ApplicationJsonParagraphText withAnnotations(RetrieveABlock200ApplicationJsonParagraphTextAnnotations annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public Object href;
    public RetrieveABlock200ApplicationJsonParagraphText withHref(Object href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plain_text")
    public String plainText;
    public RetrieveABlock200ApplicationJsonParagraphText withPlainText(String plainText) {
        this.plainText = plainText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public RetrieveABlock200ApplicationJsonParagraphTextText text;
    public RetrieveABlock200ApplicationJsonParagraphText withText(RetrieveABlock200ApplicationJsonParagraphTextText text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RetrieveABlock200ApplicationJsonParagraphText withType(String type) {
        this.type = type;
        return this;
    }
}