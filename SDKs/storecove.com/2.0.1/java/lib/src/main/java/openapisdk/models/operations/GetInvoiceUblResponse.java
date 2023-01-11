package openapisdk.models.operations;



public class GetInvoiceUblResponse {
    public String contentType;
    public GetInvoiceUblResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object purchaseInvoiceUbl;
    public GetInvoiceUblResponse withPurchaseInvoiceUbl(Object purchaseInvoiceUbl) {
        this.purchaseInvoiceUbl = purchaseInvoiceUbl;
        return this;
    }
    public Long statusCode;
    public GetInvoiceUblResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}