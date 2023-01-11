package openapisdk.models.operations;



public class FetchWorkflowCumulativeStatisticsRequest {
    public String serverURL;
    public FetchWorkflowCumulativeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkflowCumulativeStatisticsPathParams pathParams;
    public FetchWorkflowCumulativeStatisticsRequest withPathParams(FetchWorkflowCumulativeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkflowCumulativeStatisticsQueryParams queryParams;
    public FetchWorkflowCumulativeStatisticsRequest withQueryParams(FetchWorkflowCumulativeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkflowCumulativeStatisticsSecurity security;
    public FetchWorkflowCumulativeStatisticsRequest withSecurity(FetchWorkflowCumulativeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}