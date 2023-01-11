package openapisdk.models.operations;



public class FetchConnectionPolicyTargetRequest {
    public String serverURL;
    public FetchConnectionPolicyTargetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConnectionPolicyTargetPathParams pathParams;
    public FetchConnectionPolicyTargetRequest withPathParams(FetchConnectionPolicyTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchConnectionPolicyTargetSecurity security;
    public FetchConnectionPolicyTargetRequest withSecurity(FetchConnectionPolicyTargetSecurity security) {
        this.security = security;
        return this;
    }
}