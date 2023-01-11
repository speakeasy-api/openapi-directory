package openapisdk.models.operations;



public class LandlordControllerGetInvoiceResponse {
    public byte[] body;
    public LandlordControllerGetInvoiceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public LandlordControllerGetInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> object;
    public LandlordControllerGetInvoiceResponse withObject(java.util.Map<String, Object> object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public LandlordControllerGetInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}