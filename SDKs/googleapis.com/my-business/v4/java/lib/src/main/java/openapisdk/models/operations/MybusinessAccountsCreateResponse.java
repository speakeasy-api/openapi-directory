package openapisdk.models.operations;



public class MybusinessAccountsCreateResponse {
    public openapisdk.models.shared.Account account;
    public MybusinessAccountsCreateResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public MybusinessAccountsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}