package openapisdk.models.operations;



public class CreateTransactionResponse {
    public byte[] body;
    public CreateTransactionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreateTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public CreateTransactionResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}