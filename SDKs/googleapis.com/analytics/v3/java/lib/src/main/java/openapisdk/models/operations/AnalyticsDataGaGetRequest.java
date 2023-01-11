package openapisdk.models.operations;



public class AnalyticsDataGaGetRequest {
    public AnalyticsDataGaGetQueryParams queryParams;
    public AnalyticsDataGaGetRequest withQueryParams(AnalyticsDataGaGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsDataGaGetSecurity security;
    public AnalyticsDataGaGetRequest withSecurity(AnalyticsDataGaGetSecurity security) {
        this.security = security;
        return this;
    }
}