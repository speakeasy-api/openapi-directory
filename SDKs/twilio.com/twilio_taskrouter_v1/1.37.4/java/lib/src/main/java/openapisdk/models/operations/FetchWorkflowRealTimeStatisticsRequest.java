package openapisdk.models.operations;



public class FetchWorkflowRealTimeStatisticsRequest {
    public String serverURL;
    public FetchWorkflowRealTimeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkflowRealTimeStatisticsPathParams pathParams;
    public FetchWorkflowRealTimeStatisticsRequest withPathParams(FetchWorkflowRealTimeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkflowRealTimeStatisticsQueryParams queryParams;
    public FetchWorkflowRealTimeStatisticsRequest withQueryParams(FetchWorkflowRealTimeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkflowRealTimeStatisticsSecurity security;
    public FetchWorkflowRealTimeStatisticsRequest withSecurity(FetchWorkflowRealTimeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}