package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfWriteStringRequestDtoInput
 * The request dto object to write a string on pdf page
**/
public class PdfWriteStringRequestDtoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FontFileBase64String")
    public String fontFileBase64String;
    public PdfWriteStringRequestDtoInput withFontFileBase64String(String fontFileBase64String) {
        this.fontFileBase64String = fontFileBase64String;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public PdfWriteStringOptionsInput options;
    public PdfWriteStringRequestDtoInput withOptions(PdfWriteStringOptionsInput options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PdfFileBase64String")
    public String pdfFileBase64String;
    public PdfWriteStringRequestDtoInput withPdfFileBase64String(String pdfFileBase64String) {
        this.pdfFileBase64String = pdfFileBase64String;
        return this;
    }
}