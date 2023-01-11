package openapisdk.models.operations;



public class FetchTaskQueueRealTimeStatisticsRequest {
    public String serverURL;
    public FetchTaskQueueRealTimeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskQueueRealTimeStatisticsPathParams pathParams;
    public FetchTaskQueueRealTimeStatisticsRequest withPathParams(FetchTaskQueueRealTimeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskQueueRealTimeStatisticsQueryParams queryParams;
    public FetchTaskQueueRealTimeStatisticsRequest withQueryParams(FetchTaskQueueRealTimeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchTaskQueueRealTimeStatisticsSecurity security;
    public FetchTaskQueueRealTimeStatisticsRequest withSecurity(FetchTaskQueueRealTimeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}