package openapisdk.models.operations;



public class FetchFactorRequest {
    public String serverURL;
    public FetchFactorRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFactorPathParams pathParams;
    public FetchFactorRequest withPathParams(FetchFactorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFactorSecurity security;
    public FetchFactorRequest withSecurity(FetchFactorSecurity security) {
        this.security = security;
        return this;
    }
}