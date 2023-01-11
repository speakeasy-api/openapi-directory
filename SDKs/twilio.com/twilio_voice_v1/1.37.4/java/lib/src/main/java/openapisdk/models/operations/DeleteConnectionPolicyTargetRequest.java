package openapisdk.models.operations;



public class DeleteConnectionPolicyTargetRequest {
    public String serverURL;
    public DeleteConnectionPolicyTargetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteConnectionPolicyTargetPathParams pathParams;
    public DeleteConnectionPolicyTargetRequest withPathParams(DeleteConnectionPolicyTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConnectionPolicyTargetSecurity security;
    public DeleteConnectionPolicyTargetRequest withSecurity(DeleteConnectionPolicyTargetSecurity security) {
        this.security = security;
        return this;
    }
}