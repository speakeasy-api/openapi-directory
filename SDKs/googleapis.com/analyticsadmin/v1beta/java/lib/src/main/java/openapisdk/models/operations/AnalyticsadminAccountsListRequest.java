package openapisdk.models.operations;



public class AnalyticsadminAccountsListRequest {
    public AnalyticsadminAccountsListQueryParams queryParams;
    public AnalyticsadminAccountsListRequest withQueryParams(AnalyticsadminAccountsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsadminAccountsListSecurity security;
    public AnalyticsadminAccountsListRequest withSecurity(AnalyticsadminAccountsListSecurity security) {
        this.security = security;
        return this;
    }
}