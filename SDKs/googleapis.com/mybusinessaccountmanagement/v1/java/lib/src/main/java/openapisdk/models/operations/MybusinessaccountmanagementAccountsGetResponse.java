package openapisdk.models.operations;



public class MybusinessaccountmanagementAccountsGetResponse {
    public openapisdk.models.shared.Account account;
    public MybusinessaccountmanagementAccountsGetResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public MybusinessaccountmanagementAccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessaccountmanagementAccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}