package openapisdk.models.operations;



public class FetchWorkspaceStatisticsRequest {
    public String serverURL;
    public FetchWorkspaceStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkspaceStatisticsPathParams pathParams;
    public FetchWorkspaceStatisticsRequest withPathParams(FetchWorkspaceStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkspaceStatisticsQueryParams queryParams;
    public FetchWorkspaceStatisticsRequest withQueryParams(FetchWorkspaceStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkspaceStatisticsSecurity security;
    public FetchWorkspaceStatisticsRequest withSecurity(FetchWorkspaceStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}