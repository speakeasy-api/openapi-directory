package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TextFormat
 * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
**/
public class TextFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bold")
    public Boolean bold;
    public TextFormat withBold(Boolean bold) {
        this.bold = bold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fontFamily")
    public String fontFamily;
    public TextFormat withFontFamily(String fontFamily) {
        this.fontFamily = fontFamily;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fontSize")
    public Integer fontSize;
    public TextFormat withFontSize(Integer fontSize) {
        this.fontSize = fontSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColor")
    public Color foregroundColor;
    public TextFormat withForegroundColor(Color foregroundColor) {
        this.foregroundColor = foregroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColorStyle")
    public ColorStyle foregroundColorStyle;
    public TextFormat withForegroundColorStyle(ColorStyle foregroundColorStyle) {
        this.foregroundColorStyle = foregroundColorStyle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("italic")
    public Boolean italic;
    public TextFormat withItalic(Boolean italic) {
        this.italic = italic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Link link;
    public TextFormat withLink(Link link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strikethrough")
    public Boolean strikethrough;
    public TextFormat withStrikethrough(Boolean strikethrough) {
        this.strikethrough = strikethrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("underline")
    public Boolean underline;
    public TextFormat withUnderline(Boolean underline) {
        this.underline = underline;
        return this;
    }
}