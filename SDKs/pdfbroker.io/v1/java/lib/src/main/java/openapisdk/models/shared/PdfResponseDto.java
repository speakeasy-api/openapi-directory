package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfResponseDto
 * When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf".
**/
public class PdfResponseDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public PdfResponseDto withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PdfFileBase64String")
    public String pdfFileBase64String;
    public PdfResponseDto withPdfFileBase64String(String pdfFileBase64String) {
        this.pdfFileBase64String = pdfFileBase64String;
        return this;
    }
}