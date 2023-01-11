package openapisdk.models.operations;



public class ListTaskQueuesStatisticsRequest {
    public String serverURL;
    public ListTaskQueuesStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListTaskQueuesStatisticsPathParams pathParams;
    public ListTaskQueuesStatisticsRequest withPathParams(ListTaskQueuesStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTaskQueuesStatisticsQueryParams queryParams;
    public ListTaskQueuesStatisticsRequest withQueryParams(ListTaskQueuesStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTaskQueuesStatisticsSecurity security;
    public ListTaskQueuesStatisticsRequest withSecurity(ListTaskQueuesStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}