package openapisdk.models.operations;



public class ShowInvoiceSubmissionEvidenceResponse {
    public String contentType;
    public ShowInvoiceSubmissionEvidenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invoiceSubmissionEvidence;
    public ShowInvoiceSubmissionEvidenceResponse withInvoiceSubmissionEvidence(Object invoiceSubmissionEvidence) {
        this.invoiceSubmissionEvidence = invoiceSubmissionEvidence;
        return this;
    }
    public Long statusCode;
    public ShowInvoiceSubmissionEvidenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}