package openapisdk.models.operations;



public class DeleteShortCodeRequest {
    public String serverURL;
    public DeleteShortCodeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteShortCodePathParams pathParams;
    public DeleteShortCodeRequest withPathParams(DeleteShortCodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteShortCodeSecurity security;
    public DeleteShortCodeRequest withSecurity(DeleteShortCodeSecurity security) {
        this.security = security;
        return this;
    }
}