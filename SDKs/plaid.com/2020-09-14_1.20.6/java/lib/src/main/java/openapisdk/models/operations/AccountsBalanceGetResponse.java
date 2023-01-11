package openapisdk.models.operations;



public class AccountsBalanceGetResponse {
    public java.util.Map<String, Object> accountsGetResponse;
    public AccountsBalanceGetResponse withAccountsGetResponse(java.util.Map<String, Object> accountsGetResponse) {
        this.accountsGetResponse = accountsGetResponse;
        return this;
    }
    public String contentType;
    public AccountsBalanceGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountsBalanceGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}