package openapisdk.models.operations;



public class FetchTaskStatisticsRequest {
    public String serverURL;
    public FetchTaskStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskStatisticsPathParams pathParams;
    public FetchTaskStatisticsRequest withPathParams(FetchTaskStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskStatisticsSecurity security;
    public FetchTaskStatisticsRequest withSecurity(FetchTaskStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}