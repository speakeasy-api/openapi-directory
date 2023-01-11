package openapisdk.models.operations;



public class PreflightInvoiceRecipientResponse {
    public String contentType;
    public PreflightInvoiceRecipientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] errorModels;
    public PreflightInvoiceRecipientResponse withErrorModels(Object[] errorModels) {
        this.errorModels = errorModels;
        return this;
    }
    public openapisdk.models.shared.PreflightInvoiceRecipientResult preflightInvoiceRecipientResult;
    public PreflightInvoiceRecipientResponse withPreflightInvoiceRecipientResult(openapisdk.models.shared.PreflightInvoiceRecipientResult preflightInvoiceRecipientResult) {
        this.preflightInvoiceRecipientResult = preflightInvoiceRecipientResult;
        return this;
    }
    public Long statusCode;
    public PreflightInvoiceRecipientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}