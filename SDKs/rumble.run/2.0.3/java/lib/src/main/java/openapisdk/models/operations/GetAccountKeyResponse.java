package openapisdk.models.operations;



public class GetAccountKeyResponse {
    public byte[] body;
    public GetAccountKeyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}