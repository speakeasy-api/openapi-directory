package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfConcatenationRequestDto
 * Request to concatenate a list of Pdf documents to a single Pdf document.
**/
public class PdfConcatenationRequestDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PdfDocumentsAsBase64String")
    public String[] pdfDocumentsAsBase64String;
    public PdfConcatenationRequestDto withPdfDocumentsAsBase64String(String[] pdfDocumentsAsBase64String) {
        this.pdfDocumentsAsBase64String = pdfDocumentsAsBase64String;
        return this;
    }
}