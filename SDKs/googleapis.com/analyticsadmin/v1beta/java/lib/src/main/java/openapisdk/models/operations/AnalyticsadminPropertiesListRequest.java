package openapisdk.models.operations;



public class AnalyticsadminPropertiesListRequest {
    public AnalyticsadminPropertiesListQueryParams queryParams;
    public AnalyticsadminPropertiesListRequest withQueryParams(AnalyticsadminPropertiesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsadminPropertiesListSecurity security;
    public AnalyticsadminPropertiesListRequest withSecurity(AnalyticsadminPropertiesListSecurity security) {
        this.security = security;
        return this;
    }
}