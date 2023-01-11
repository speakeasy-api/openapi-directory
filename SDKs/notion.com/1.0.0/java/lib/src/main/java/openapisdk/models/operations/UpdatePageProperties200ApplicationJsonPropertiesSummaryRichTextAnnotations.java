package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bold")
    public Boolean bold;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withBold(Boolean bold) {
        this.bold = bold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Boolean code;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withCode(Boolean code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italic")
    public Boolean italic;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withItalic(Boolean italic) {
        this.italic = italic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikethrough")
    public Boolean strikethrough;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withStrikethrough(Boolean strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underline")
    public Boolean underline;
    public UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations withUnderline(Boolean underline) {
        this.underline = underline;
        return this;
    }
}