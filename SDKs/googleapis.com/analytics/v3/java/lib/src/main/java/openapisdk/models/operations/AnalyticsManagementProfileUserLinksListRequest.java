package openapisdk.models.operations;



public class AnalyticsManagementProfileUserLinksListRequest {
    public AnalyticsManagementProfileUserLinksListPathParams pathParams;
    public AnalyticsManagementProfileUserLinksListRequest withPathParams(AnalyticsManagementProfileUserLinksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsManagementProfileUserLinksListQueryParams queryParams;
    public AnalyticsManagementProfileUserLinksListRequest withQueryParams(AnalyticsManagementProfileUserLinksListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementProfileUserLinksListSecurity security;
    public AnalyticsManagementProfileUserLinksListRequest withSecurity(AnalyticsManagementProfileUserLinksListSecurity security) {
        this.security = security;
        return this;
    }
}