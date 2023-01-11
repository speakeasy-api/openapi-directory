package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlock200ApplicationJsonParagraphTextAnnotations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bold")
    public Boolean bold;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withBold(Boolean bold) {
        this.bold = bold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Boolean code;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withCode(Boolean code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italic")
    public Boolean italic;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withItalic(Boolean italic) {
        this.italic = italic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikethrough")
    public Boolean strikethrough;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withStrikethrough(Boolean strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underline")
    public Boolean underline;
    public UpdateABlock200ApplicationJsonParagraphTextAnnotations withUnderline(Boolean underline) {
        this.underline = underline;
        return this;
    }
}