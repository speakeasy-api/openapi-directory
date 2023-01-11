package openapisdk.models.operations;



public class FetchDayRequest {
    public String serverURL;
    public FetchDayRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDayPathParams pathParams;
    public FetchDayRequest withPathParams(FetchDayPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchDaySecurity security;
    public FetchDayRequest withSecurity(FetchDaySecurity security) {
        this.security = security;
        return this;
    }
}