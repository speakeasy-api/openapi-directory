package openapisdk.models.operations;



public class GetTransactionResponse {
    public byte[] body;
    public GetTransactionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTransactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTransactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object netlicensing;
    public GetTransactionResponse withNetlicensing(Object netlicensing) {
        this.netlicensing = netlicensing;
        return this;
    }
}