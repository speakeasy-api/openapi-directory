package openapisdk.models.operations;



public class CancelResponse {
    public byte[] body;
    public CancelResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CancelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CancelResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public CancelResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public CancelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}