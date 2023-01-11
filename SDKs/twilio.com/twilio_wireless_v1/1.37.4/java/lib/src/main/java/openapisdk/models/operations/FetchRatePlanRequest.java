package openapisdk.models.operations;



public class FetchRatePlanRequest {
    public String serverURL;
    public FetchRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchRatePlanPathParams pathParams;
    public FetchRatePlanRequest withPathParams(FetchRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchRatePlanSecurity security;
    public FetchRatePlanRequest withSecurity(FetchRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}