package openapisdk.models.operations;



public class FetchUnderstandTaskStatisticsRequest {
    public String serverURL;
    public FetchUnderstandTaskStatisticsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandTaskStatisticsPathParams pathParams;
    public FetchUnderstandTaskStatisticsRequest withPathParams(FetchUnderstandTaskStatisticsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandTaskStatisticsSecurity security;
    public FetchUnderstandTaskStatisticsRequest withSecurity(FetchUnderstandTaskStatisticsSecurity security) {
        this.security = security;
        return this;
    }
}