package openapisdk.models.operations;



public class FetchWorkspaceCumulativeStatisticsRequest {
    public String serverURL;
    public FetchWorkspaceCumulativeStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkspaceCumulativeStatisticsPathParams pathParams;
    public FetchWorkspaceCumulativeStatisticsRequest withPathParams(FetchWorkspaceCumulativeStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkspaceCumulativeStatisticsQueryParams queryParams;
    public FetchWorkspaceCumulativeStatisticsRequest withQueryParams(FetchWorkspaceCumulativeStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchWorkspaceCumulativeStatisticsSecurity security;
    public FetchWorkspaceCumulativeStatisticsRequest withSecurity(FetchWorkspaceCumulativeStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}