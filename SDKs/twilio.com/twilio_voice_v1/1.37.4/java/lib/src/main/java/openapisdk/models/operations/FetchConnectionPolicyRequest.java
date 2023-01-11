package openapisdk.models.operations;



public class FetchConnectionPolicyRequest {
    public String serverURL;
    public FetchConnectionPolicyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConnectionPolicyPathParams pathParams;
    public FetchConnectionPolicyRequest withPathParams(FetchConnectionPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConnectionPolicySecurity security;
    public FetchConnectionPolicyRequest withSecurity(FetchConnectionPolicySecurity security) {
        this.security = security;
        return this;
    }
}