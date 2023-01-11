package openapisdk.models.operations;



public class DeleteUnderstandAssistantRequest {
    public String serverURL;
    public DeleteUnderstandAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteUnderstandAssistantPathParams pathParams;
    public DeleteUnderstandAssistantRequest withPathParams(DeleteUnderstandAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteUnderstandAssistantSecurity security;
    public DeleteUnderstandAssistantRequest withSecurity(DeleteUnderstandAssistantSecurity security) {
        this.security = security;
        return this;
    }
}