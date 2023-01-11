package openapisdk.models.operations;



public class DfareportingAccountsListResponse {
    public openapisdk.models.shared.AccountsListResponse accountsListResponse;
    public DfareportingAccountsListResponse withAccountsListResponse(openapisdk.models.shared.AccountsListResponse accountsListResponse) {
        this.accountsListResponse = accountsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}