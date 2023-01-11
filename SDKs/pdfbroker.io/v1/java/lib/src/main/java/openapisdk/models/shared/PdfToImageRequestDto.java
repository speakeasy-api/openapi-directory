package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PdfToImageRequestDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public PdfToImageOptions options;
    public PdfToImageRequestDto withOptions(PdfToImageOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PdfFileBase64String")
    public String pdfFileBase64String;
    public PdfToImageRequestDto withPdfFileBase64String(String pdfFileBase64String) {
        this.pdfFileBase64String = pdfFileBase64String;
        return this;
    }
}