package openapisdk.models.operations;



public class GetAccountBalanceResponse {
    public byte[] body;
    public GetAccountBalanceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorAuthenticationFailedAccountBalance errorAuthenticationFailedAccountBalance;
    public GetAccountBalanceResponse withErrorAuthenticationFailedAccountBalance(openapisdk.models.shared.ErrorAuthenticationFailedAccountBalance errorAuthenticationFailedAccountBalance) {
        this.errorAuthenticationFailedAccountBalance = errorAuthenticationFailedAccountBalance;
        return this;
    }
    public Long statusCode;
    public GetAccountBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountBalance accountBalance;
    public GetAccountBalanceResponse withAccountBalance(openapisdk.models.shared.AccountBalance accountBalance) {
        this.accountBalance = accountBalance;
        return this;
    }
}