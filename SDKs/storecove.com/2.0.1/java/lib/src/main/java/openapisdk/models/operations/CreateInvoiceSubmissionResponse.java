package openapisdk.models.operations;



public class CreateInvoiceSubmissionResponse {
    public String contentType;
    public CreateInvoiceSubmissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public CreateInvoiceSubmissionResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public openapisdk.models.shared.InvoiceSubmissionResult invoiceSubmissionResult;
    public CreateInvoiceSubmissionResponse withInvoiceSubmissionResult(openapisdk.models.shared.InvoiceSubmissionResult invoiceSubmissionResult) {
        this.invoiceSubmissionResult = invoiceSubmissionResult;
        return this;
    }
    public Long statusCode;
    public CreateInvoiceSubmissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}