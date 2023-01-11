package openapisdk.models.operations;



public class GetUserAccountsResponse {
    public byte[] body;
    public GetUserAccountsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetUserAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}