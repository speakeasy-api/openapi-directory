package openapisdk.models.operations;



public class AccountsGetResponse {
    public java.util.Map<String, Object> accountsGetResponse;
    public AccountsGetResponse withAccountsGetResponse(java.util.Map<String, Object> accountsGetResponse) {
        this.accountsGetResponse = accountsGetResponse;
        return this;
    }
    public String contentType;
    public AccountsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> error;
    public AccountsGetResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public AccountsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}