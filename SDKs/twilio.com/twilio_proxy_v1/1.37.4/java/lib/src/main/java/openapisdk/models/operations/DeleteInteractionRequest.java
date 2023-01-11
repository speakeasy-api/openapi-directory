package openapisdk.models.operations;



public class DeleteInteractionRequest {
    public String serverURL;
    public DeleteInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteInteractionPathParams pathParams;
    public DeleteInteractionRequest withPathParams(DeleteInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteInteractionSecurity security;
    public DeleteInteractionRequest withSecurity(DeleteInteractionSecurity security) {
        this.security = security;
        return this;
    }
}