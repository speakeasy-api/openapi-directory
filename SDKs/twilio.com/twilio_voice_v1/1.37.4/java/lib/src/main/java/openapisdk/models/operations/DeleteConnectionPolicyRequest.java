package openapisdk.models.operations;



public class DeleteConnectionPolicyRequest {
    public String serverURL;
    public DeleteConnectionPolicyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConnectionPolicyPathParams pathParams;
    public DeleteConnectionPolicyRequest withPathParams(DeleteConnectionPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConnectionPolicySecurity security;
    public DeleteConnectionPolicyRequest withSecurity(DeleteConnectionPolicySecurity security) {
        this.security = security;
        return this;
    }
}