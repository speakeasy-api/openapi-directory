package openapisdk.models.operations;



public class DeleteUsAppToPersonRequest {
    public String serverURL;
    public DeleteUsAppToPersonRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUsAppToPersonPathParams pathParams;
    public DeleteUsAppToPersonRequest withPathParams(DeleteUsAppToPersonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUsAppToPersonSecurity security;
    public DeleteUsAppToPersonRequest withSecurity(DeleteUsAppToPersonSecurity security) {
        this.security = security;
        return this;
    }
}