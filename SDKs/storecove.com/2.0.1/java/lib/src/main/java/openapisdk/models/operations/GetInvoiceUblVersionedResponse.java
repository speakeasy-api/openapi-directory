package openapisdk.models.operations;



public class GetInvoiceUblVersionedResponse {
    public String contentType;
    public GetInvoiceUblVersionedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object purchaseInvoiceUbl;
    public GetInvoiceUblVersionedResponse withPurchaseInvoiceUbl(Object purchaseInvoiceUbl) {
        this.purchaseInvoiceUbl = purchaseInvoiceUbl;
        return this;
    }
    public Long statusCode;
    public GetInvoiceUblVersionedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}