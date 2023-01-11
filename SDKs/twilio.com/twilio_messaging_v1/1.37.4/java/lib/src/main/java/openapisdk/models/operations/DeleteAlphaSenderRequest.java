package openapisdk.models.operations;



public class DeleteAlphaSenderRequest {
    public String serverURL;
    public DeleteAlphaSenderRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteAlphaSenderPathParams pathParams;
    public DeleteAlphaSenderRequest withPathParams(DeleteAlphaSenderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAlphaSenderSecurity security;
    public DeleteAlphaSenderRequest withSecurity(DeleteAlphaSenderSecurity security) {
        this.security = security;
        return this;
    }
}