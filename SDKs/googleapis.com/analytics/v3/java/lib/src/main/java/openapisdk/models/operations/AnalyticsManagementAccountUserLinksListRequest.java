package openapisdk.models.operations;



public class AnalyticsManagementAccountUserLinksListRequest {
    public AnalyticsManagementAccountUserLinksListPathParams pathParams;
    public AnalyticsManagementAccountUserLinksListRequest withPathParams(AnalyticsManagementAccountUserLinksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementAccountUserLinksListQueryParams queryParams;
    public AnalyticsManagementAccountUserLinksListRequest withQueryParams(AnalyticsManagementAccountUserLinksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementAccountUserLinksListSecurity security;
    public AnalyticsManagementAccountUserLinksListRequest withSecurity(AnalyticsManagementAccountUserLinksListSecurity security) {
        this.security = security;
        return this;
    }
}