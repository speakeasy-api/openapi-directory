package openapisdk.models.operations;



public class GetInvoiceJsonResponse {
    public String contentType;
    public GetInvoiceJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object purchaseInvoice;
    public GetInvoiceJsonResponse withPurchaseInvoice(Object purchaseInvoice) {
        this.purchaseInvoice = purchaseInvoice;
        return this;
    }
    public Long statusCode;
    public GetInvoiceJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}