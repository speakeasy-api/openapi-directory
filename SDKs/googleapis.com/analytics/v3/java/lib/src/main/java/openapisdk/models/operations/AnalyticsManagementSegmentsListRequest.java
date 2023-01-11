package openapisdk.models.operations;



public class AnalyticsManagementSegmentsListRequest {
    public AnalyticsManagementSegmentsListQueryParams queryParams;
    public AnalyticsManagementSegmentsListRequest withQueryParams(AnalyticsManagementSegmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsManagementSegmentsListSecurity security;
    public AnalyticsManagementSegmentsListRequest withSecurity(AnalyticsManagementSegmentsListSecurity security) {
        this.security = security;
        return this;
    }
}