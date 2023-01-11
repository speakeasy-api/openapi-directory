package openapisdk.models.operations;



public class UpdateResponse {
    public byte[] body;
    public UpdateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public UpdateResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public UpdateResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Object shopperId;
    public UpdateResponse withShopperId(Object shopperId) {
        this.shopperId = shopperId;
        return this;
    }
    public Long statusCode;
    public UpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}