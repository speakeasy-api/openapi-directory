package openapisdk.models.operations;



public class GetStatusResponse {
    public byte[] body;
    public GetStatusResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetStatusResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public GetStatusResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Object shopperStatus;
    public GetStatusResponse withShopperStatus(Object shopperStatus) {
        this.shopperStatus = shopperStatus;
        return this;
    }
    public Long statusCode;
    public GetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}