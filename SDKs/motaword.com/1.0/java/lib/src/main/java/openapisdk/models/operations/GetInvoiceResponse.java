package openapisdk.models.operations;



public class GetInvoiceResponse {
    public String contentType;
    public GetInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetInvoiceResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Invoice invoice;
    public GetInvoiceResponse withInvoice(openapisdk.models.shared.Invoice invoice) {
        this.invoice = invoice;
        return this;
    }
    public Long statusCode;
    public GetInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}