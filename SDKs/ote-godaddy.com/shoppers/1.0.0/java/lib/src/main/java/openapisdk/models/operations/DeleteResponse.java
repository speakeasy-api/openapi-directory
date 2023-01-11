package openapisdk.models.operations;



public class DeleteResponse {
    public byte[] body;
    public DeleteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public DeleteResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public DeleteResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Long statusCode;
    public DeleteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}