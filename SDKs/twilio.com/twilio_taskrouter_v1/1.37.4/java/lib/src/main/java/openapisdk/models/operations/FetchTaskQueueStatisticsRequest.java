package openapisdk.models.operations;



public class FetchTaskQueueStatisticsRequest {
    public String serverURL;
    public FetchTaskQueueStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskQueueStatisticsPathParams pathParams;
    public FetchTaskQueueStatisticsRequest withPathParams(FetchTaskQueueStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskQueueStatisticsQueryParams queryParams;
    public FetchTaskQueueStatisticsRequest withQueryParams(FetchTaskQueueStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchTaskQueueStatisticsSecurity security;
    public FetchTaskQueueStatisticsRequest withSecurity(FetchTaskQueueStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}