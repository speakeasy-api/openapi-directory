package openapisdk.models.operations;



public class UpdateTransactionResponse {
    public byte[] body;
    public UpdateTransactionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public UpdateTransactionResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}