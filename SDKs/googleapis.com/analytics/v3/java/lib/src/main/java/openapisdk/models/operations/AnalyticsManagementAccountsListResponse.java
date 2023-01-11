package openapisdk.models.operations;



public class AnalyticsManagementAccountsListResponse {
    public openapisdk.models.shared.Accounts accounts;
    public AnalyticsManagementAccountsListResponse withAccounts(openapisdk.models.shared.Accounts accounts) {
        this.accounts = accounts;
        return this;
    }
    public String contentType;
    public AnalyticsManagementAccountsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementAccountsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}