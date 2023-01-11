package openapisdk.models.operations;



public class AnalyticsManagementAccountSummariesListRequest {
    public AnalyticsManagementAccountSummariesListQueryParams queryParams;
    public AnalyticsManagementAccountSummariesListRequest withQueryParams(AnalyticsManagementAccountSummariesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementAccountSummariesListSecurity security;
    public AnalyticsManagementAccountSummariesListRequest withSecurity(AnalyticsManagementAccountSummariesListSecurity security) {
        this.security = security;
        return this;
    }
}