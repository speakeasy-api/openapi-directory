package openapisdk.models.operations;



public class FetchUnderstandAssistantRequest {
    public String serverURL;
    public FetchUnderstandAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandAssistantPathParams pathParams;
    public FetchUnderstandAssistantRequest withPathParams(FetchUnderstandAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandAssistantSecurity security;
    public FetchUnderstandAssistantRequest withSecurity(FetchUnderstandAssistantSecurity security) {
        this.security = security;
        return this;
    }
}