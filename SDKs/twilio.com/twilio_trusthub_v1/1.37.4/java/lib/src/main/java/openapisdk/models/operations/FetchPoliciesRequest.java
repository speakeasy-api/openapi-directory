package openapisdk.models.operations;



public class FetchPoliciesRequest {
    public String serverURL;
    public FetchPoliciesRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchPoliciesPathParams pathParams;
    public FetchPoliciesRequest withPathParams(FetchPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchPoliciesSecurity security;
    public FetchPoliciesRequest withSecurity(FetchPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}