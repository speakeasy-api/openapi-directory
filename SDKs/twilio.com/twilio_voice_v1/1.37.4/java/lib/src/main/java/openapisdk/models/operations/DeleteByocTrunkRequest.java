package openapisdk.models.operations;



public class DeleteByocTrunkRequest {
    public String serverURL;
    public DeleteByocTrunkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteByocTrunkPathParams pathParams;
    public DeleteByocTrunkRequest withPathParams(DeleteByocTrunkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteByocTrunkSecurity security;
    public DeleteByocTrunkRequest withSecurity(DeleteByocTrunkSecurity security) {
        this.security = security;
        return this;
    }
}