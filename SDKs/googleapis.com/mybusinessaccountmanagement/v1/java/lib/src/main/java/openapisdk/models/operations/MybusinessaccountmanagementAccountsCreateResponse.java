package openapisdk.models.operations;



public class MybusinessaccountmanagementAccountsCreateResponse {
    public openapisdk.models.shared.Account account;
    public MybusinessaccountmanagementAccountsCreateResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public MybusinessaccountmanagementAccountsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessaccountmanagementAccountsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}