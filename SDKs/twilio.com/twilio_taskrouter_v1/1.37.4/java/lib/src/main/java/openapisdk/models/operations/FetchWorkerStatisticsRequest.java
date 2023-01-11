package openapisdk.models.operations;



public class FetchWorkerStatisticsRequest {
    public String serverURL;
    public FetchWorkerStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkerStatisticsPathParams pathParams;
    public FetchWorkerStatisticsRequest withPathParams(FetchWorkerStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkerStatisticsQueryParams queryParams;
    public FetchWorkerStatisticsRequest withQueryParams(FetchWorkerStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkerStatisticsSecurity security;
    public FetchWorkerStatisticsRequest withSecurity(FetchWorkerStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}