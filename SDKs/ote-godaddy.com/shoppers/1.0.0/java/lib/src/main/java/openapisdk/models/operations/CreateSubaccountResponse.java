package openapisdk.models.operations;



public class CreateSubaccountResponse {
    public byte[] body;
    public CreateSubaccountResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateSubaccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public CreateSubaccountResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Object errorLimit;
    public CreateSubaccountResponse withErrorLimit(Object errorLimit) {
        this.errorLimit = errorLimit;
        return this;
    }
    public Object shopperId;
    public CreateSubaccountResponse withShopperId(Object shopperId) {
        this.shopperId = shopperId;
        return this;
    }
    public Long statusCode;
    public CreateSubaccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}