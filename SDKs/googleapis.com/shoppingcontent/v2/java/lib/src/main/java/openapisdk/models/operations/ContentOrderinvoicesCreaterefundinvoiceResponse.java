package openapisdk.models.operations;



public class ContentOrderinvoicesCreaterefundinvoiceResponse {
    public String contentType;
    public ContentOrderinvoicesCreaterefundinvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.OrderinvoicesCreateRefundInvoiceResponse orderinvoicesCreateRefundInvoiceResponse;
    public ContentOrderinvoicesCreaterefundinvoiceResponse withOrderinvoicesCreateRefundInvoiceResponse(openapisdk.models.shared.OrderinvoicesCreateRefundInvoiceResponse orderinvoicesCreateRefundInvoiceResponse) {
        this.orderinvoicesCreateRefundInvoiceResponse = orderinvoicesCreateRefundInvoiceResponse;
        return this;
    }
    public Long statusCode;
    public ContentOrderinvoicesCreaterefundinvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}