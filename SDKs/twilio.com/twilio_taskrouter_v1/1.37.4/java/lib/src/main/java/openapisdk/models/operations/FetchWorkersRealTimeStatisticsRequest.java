package openapisdk.models.operations;



public class FetchWorkersRealTimeStatisticsRequest {
    public String serverURL;
    public FetchWorkersRealTimeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkersRealTimeStatisticsPathParams pathParams;
    public FetchWorkersRealTimeStatisticsRequest withPathParams(FetchWorkersRealTimeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkersRealTimeStatisticsQueryParams queryParams;
    public FetchWorkersRealTimeStatisticsRequest withQueryParams(FetchWorkersRealTimeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkersRealTimeStatisticsSecurity security;
    public FetchWorkersRealTimeStatisticsRequest withSecurity(FetchWorkersRealTimeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}