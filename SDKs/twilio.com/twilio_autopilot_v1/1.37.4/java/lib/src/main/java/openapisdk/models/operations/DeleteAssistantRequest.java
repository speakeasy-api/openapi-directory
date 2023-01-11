package openapisdk.models.operations;



public class DeleteAssistantRequest {
    public String serverURL;
    public DeleteAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteAssistantPathParams pathParams;
    public DeleteAssistantRequest withPathParams(DeleteAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAssistantSecurity security;
    public DeleteAssistantRequest withSecurity(DeleteAssistantSecurity security) {
        this.security = security;
        return this;
    }
}