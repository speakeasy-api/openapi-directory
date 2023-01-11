package openapisdk.models.operations;



public class FetchTaskQueueCumulativeStatisticsRequest {
    public String serverURL;
    public FetchTaskQueueCumulativeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskQueueCumulativeStatisticsPathParams pathParams;
    public FetchTaskQueueCumulativeStatisticsRequest withPathParams(FetchTaskQueueCumulativeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskQueueCumulativeStatisticsQueryParams queryParams;
    public FetchTaskQueueCumulativeStatisticsRequest withQueryParams(FetchTaskQueueCumulativeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchTaskQueueCumulativeStatisticsSecurity security;
    public FetchTaskQueueCumulativeStatisticsRequest withSecurity(FetchTaskQueueCumulativeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}