package openapisdk.models.operations;



public class AnalyticsManagementAccountsListRequest {
    public AnalyticsManagementAccountsListQueryParams queryParams;
    public AnalyticsManagementAccountsListRequest withQueryParams(AnalyticsManagementAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementAccountsListSecurity security;
    public AnalyticsManagementAccountsListRequest withSecurity(AnalyticsManagementAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}