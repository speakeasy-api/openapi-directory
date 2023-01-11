package openapisdk.models.operations;



public class FetchUnderstandAssistantFallbackActionsRequest {
    public String serverURL;
    public FetchUnderstandAssistantFallbackActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandAssistantFallbackActionsPathParams pathParams;
    public FetchUnderstandAssistantFallbackActionsRequest withPathParams(FetchUnderstandAssistantFallbackActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandAssistantFallbackActionsSecurity security;
    public FetchUnderstandAssistantFallbackActionsRequest withSecurity(FetchUnderstandAssistantFallbackActionsSecurity security) {
        this.security = security;
        return this;
    }
}