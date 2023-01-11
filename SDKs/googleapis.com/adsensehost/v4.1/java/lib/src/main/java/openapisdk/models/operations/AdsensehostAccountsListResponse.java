package openapisdk.models.operations;



public class AdsensehostAccountsListResponse {
    public openapisdk.models.shared.Accounts accounts;
    public AdsensehostAccountsListResponse withAccounts(openapisdk.models.shared.Accounts accounts) {
        this.accounts = accounts;
        return this;
    }
    public String contentType;
    public AdsensehostAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AdsensehostAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}