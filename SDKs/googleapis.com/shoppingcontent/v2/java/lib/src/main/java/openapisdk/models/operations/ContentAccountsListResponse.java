package openapisdk.models.operations;



public class ContentAccountsListResponse {
    public openapisdk.models.shared.AccountsListResponse accountsListResponse;
    public ContentAccountsListResponse withAccountsListResponse(openapisdk.models.shared.AccountsListResponse accountsListResponse) {
        this.accountsListResponse = accountsListResponse;
        return this;
    }
    public String contentType;
    public ContentAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ContentAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}