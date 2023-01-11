package openapisdk.models.operations;



public class ContentOrderinvoicesCreatechargeinvoiceResponse {
    public String contentType;
    public ContentOrderinvoicesCreatechargeinvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderinvoicesCreateChargeInvoiceResponse orderinvoicesCreateChargeInvoiceResponse;
    public ContentOrderinvoicesCreatechargeinvoiceResponse withOrderinvoicesCreateChargeInvoiceResponse(openapisdk.models.shared.OrderinvoicesCreateChargeInvoiceResponse orderinvoicesCreateChargeInvoiceResponse) {
        this.orderinvoicesCreateChargeInvoiceResponse = orderinvoicesCreateChargeInvoiceResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrderinvoicesCreatechargeinvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}