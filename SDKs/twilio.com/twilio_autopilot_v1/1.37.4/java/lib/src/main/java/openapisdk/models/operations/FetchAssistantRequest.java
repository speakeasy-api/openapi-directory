package openapisdk.models.operations;



public class FetchAssistantRequest {
    public String serverURL;
    public FetchAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAssistantPathParams pathParams;
    public FetchAssistantRequest withPathParams(FetchAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAssistantSecurity security;
    public FetchAssistantRequest withSecurity(FetchAssistantSecurity security) {
        this.security = security;
        return this;
    }
}