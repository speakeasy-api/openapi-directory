package openapisdk.models.operations;



public class FetchWorkerInstanceStatisticsRequest {
    public String serverURL;
    public FetchWorkerInstanceStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkerInstanceStatisticsPathParams pathParams;
    public FetchWorkerInstanceStatisticsRequest withPathParams(FetchWorkerInstanceStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkerInstanceStatisticsQueryParams queryParams;
    public FetchWorkerInstanceStatisticsRequest withQueryParams(FetchWorkerInstanceStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkerInstanceStatisticsSecurity security;
    public FetchWorkerInstanceStatisticsRequest withSecurity(FetchWorkerInstanceStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}