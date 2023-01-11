package openapisdk.models.operations;



public class GetAccountInfoResponse {
    public openapisdk.models.shared.Account account;
    public GetAccountInfoResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public byte[] body;
    public GetAccountInfoResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}