package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfWriteStringOptionsInput
 * Options for writing string in pdf page;
**/
public class PdfWriteStringOptionsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Font")
    public FontDtoInput font;
    public PdfWriteStringOptionsInput withFont(FontDtoInput font) {
        this.font = font;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public PdfWriteStringOptionsInput withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public PdfWriteStringOptionsInput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XOrigin")
    public Integer xOrigin;
    public PdfWriteStringOptionsInput withXOrigin(Integer xOrigin) {
        this.xOrigin = xOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("XPosition")
    public Float xPosition;
    public PdfWriteStringOptionsInput withXPosition(Float xPosition) {
        this.xPosition = xPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YOrigin")
    public Integer yOrigin;
    public PdfWriteStringOptionsInput withYOrigin(Integer yOrigin) {
        this.yOrigin = yOrigin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YPosition")
    public Float yPosition;
    public PdfWriteStringOptionsInput withYPosition(Float yPosition) {
        this.yPosition = yPosition;
        return this;
    }
}