package openapisdk.models.operations;



public class FetchWorkspaceRealTimeStatisticsRequest {
    public String serverURL;
    public FetchWorkspaceRealTimeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkspaceRealTimeStatisticsPathParams pathParams;
    public FetchWorkspaceRealTimeStatisticsRequest withPathParams(FetchWorkspaceRealTimeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkspaceRealTimeStatisticsQueryParams queryParams;
    public FetchWorkspaceRealTimeStatisticsRequest withQueryParams(FetchWorkspaceRealTimeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkspaceRealTimeStatisticsSecurity security;
    public FetchWorkspaceRealTimeStatisticsRequest withSecurity(FetchWorkspaceRealTimeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}