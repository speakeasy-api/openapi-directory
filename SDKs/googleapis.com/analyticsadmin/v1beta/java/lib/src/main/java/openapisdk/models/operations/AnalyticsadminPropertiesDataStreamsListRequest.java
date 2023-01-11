package openapisdk.models.operations;



public class AnalyticsadminPropertiesDataStreamsListRequest {
    public AnalyticsadminPropertiesDataStreamsListPathParams pathParams;
    public AnalyticsadminPropertiesDataStreamsListRequest withPathParams(AnalyticsadminPropertiesDataStreamsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsListQueryParams queryParams;
    public AnalyticsadminPropertiesDataStreamsListRequest withQueryParams(AnalyticsadminPropertiesDataStreamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsadminPropertiesDataStreamsListSecurity security;
    public AnalyticsadminPropertiesDataStreamsListRequest withSecurity(AnalyticsadminPropertiesDataStreamsListSecurity security) {
        this.security = security;
        return this;
    }
}