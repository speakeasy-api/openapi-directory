package openapisdk.models.operations;



public class FetchWorkersCumulativeStatisticsRequest {
    public String serverURL;
    public FetchWorkersCumulativeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkersCumulativeStatisticsPathParams pathParams;
    public FetchWorkersCumulativeStatisticsRequest withPathParams(FetchWorkersCumulativeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkersCumulativeStatisticsQueryParams queryParams;
    public FetchWorkersCumulativeStatisticsRequest withQueryParams(FetchWorkersCumulativeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkersCumulativeStatisticsSecurity security;
    public FetchWorkersCumulativeStatisticsRequest withSecurity(FetchWorkersCumulativeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}