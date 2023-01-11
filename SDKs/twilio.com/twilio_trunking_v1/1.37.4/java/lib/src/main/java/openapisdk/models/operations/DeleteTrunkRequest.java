package openapisdk.models.operations;



public class DeleteTrunkRequest {
    public String serverURL;
    public DeleteTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteTrunkPathParams pathParams;
    public DeleteTrunkRequest withPathParams(DeleteTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTrunkSecurity security;
    public DeleteTrunkRequest withSecurity(DeleteTrunkSecurity security) {
        this.security = security;
        return this;
    }
}