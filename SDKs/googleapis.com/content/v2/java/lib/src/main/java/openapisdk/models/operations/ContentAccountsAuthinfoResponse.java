package openapisdk.models.operations;



public class ContentAccountsAuthinfoResponse {
    public openapisdk.models.shared.AccountsAuthInfoResponse accountsAuthInfoResponse;
    public ContentAccountsAuthinfoResponse withAccountsAuthInfoResponse(openapisdk.models.shared.AccountsAuthInfoResponse accountsAuthInfoResponse) {
        this.accountsAuthInfoResponse = accountsAuthInfoResponse;
        return this;
    }
    public String contentType;
    public ContentAccountsAuthinfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsAuthinfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}