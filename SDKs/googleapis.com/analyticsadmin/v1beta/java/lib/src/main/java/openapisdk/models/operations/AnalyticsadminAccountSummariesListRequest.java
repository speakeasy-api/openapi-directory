package openapisdk.models.operations;



public class AnalyticsadminAccountSummariesListRequest {
    public AnalyticsadminAccountSummariesListQueryParams queryParams;
    public AnalyticsadminAccountSummariesListRequest withQueryParams(AnalyticsadminAccountSummariesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsadminAccountSummariesListSecurity security;
    public AnalyticsadminAccountSummariesListRequest withSecurity(AnalyticsadminAccountSummariesListSecurity security) {
        this.security = security;
        return this;
    }
}