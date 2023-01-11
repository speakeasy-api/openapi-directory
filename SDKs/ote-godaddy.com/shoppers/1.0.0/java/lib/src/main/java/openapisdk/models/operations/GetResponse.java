package openapisdk.models.operations;



public class GetResponse {
    public byte[] body;
    public GetResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public GetResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Object shopper;
    public GetResponse withShopper(Object shopper) {
        this.shopper = shopper;
        return this;
    }
    public Long statusCode;
    public GetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}