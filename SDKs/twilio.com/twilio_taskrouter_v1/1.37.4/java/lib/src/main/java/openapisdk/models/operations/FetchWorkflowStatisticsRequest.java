package openapisdk.models.operations;



public class FetchWorkflowStatisticsRequest {
    public String serverURL;
    public FetchWorkflowStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkflowStatisticsPathParams pathParams;
    public FetchWorkflowStatisticsRequest withPathParams(FetchWorkflowStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkflowStatisticsQueryParams queryParams;
    public FetchWorkflowStatisticsRequest withQueryParams(FetchWorkflowStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkflowStatisticsSecurity security;
    public FetchWorkflowStatisticsRequest withSecurity(FetchWorkflowStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}