package openapisdk.models.operations;



public class MybusinessAccountsGenerateAccountNumberResponse {
    public openapisdk.models.shared.Account account;
    public MybusinessAccountsGenerateAccountNumberResponse withAccount(openapisdk.models.shared.Account account) {
        this.account = account;
        return this;
    }
    public String contentType;
    public MybusinessAccountsGenerateAccountNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MybusinessAccountsGenerateAccountNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}