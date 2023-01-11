package openapisdk.models.operations;



public class AnalyticsDataMcfGetRequest {
    public AnalyticsDataMcfGetQueryParams queryParams;
    public AnalyticsDataMcfGetRequest withQueryParams(AnalyticsDataMcfGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsDataMcfGetSecurity security;
    public AnalyticsDataMcfGetRequest withSecurity(AnalyticsDataMcfGetSecurity security) {
        this.security = security;
        return this;
    }
}