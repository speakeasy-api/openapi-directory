package openapisdk.models.operations;



public class AnalyticsDataRealtimeGetRequest {
    public AnalyticsDataRealtimeGetQueryParams queryParams;
    public AnalyticsDataRealtimeGetRequest withQueryParams(AnalyticsDataRealtimeGetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AnalyticsDataRealtimeGetSecurity security;
    public AnalyticsDataRealtimeGetRequest withSecurity(AnalyticsDataRealtimeGetSecurity security) {
        this.security = security;
        return this;
    }
}