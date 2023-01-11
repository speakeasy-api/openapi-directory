package openapisdk.models.operations;



public class DeleteActivityRequest {
    public String serverURL;
    public DeleteActivityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteActivityPathParams pathParams;
    public DeleteActivityRequest withPathParams(DeleteActivityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteActivitySecurity security;
    public DeleteActivityRequest withSecurity(DeleteActivitySecurity security) {
        this.security = security;
        return this;
    }
}