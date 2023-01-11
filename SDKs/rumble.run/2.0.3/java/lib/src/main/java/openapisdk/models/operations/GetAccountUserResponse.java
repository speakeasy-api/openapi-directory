package openapisdk.models.operations;



public class GetAccountUserResponse {
    public byte[] body;
    public GetAccountUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}