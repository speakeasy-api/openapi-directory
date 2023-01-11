package openapisdk.models.operations;



public class FetchUnderstandAssistantInitiationActionsRequest {
    public String serverURL;
    public FetchUnderstandAssistantInitiationActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandAssistantInitiationActionsPathParams pathParams;
    public FetchUnderstandAssistantInitiationActionsRequest withPathParams(FetchUnderstandAssistantInitiationActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandAssistantInitiationActionsSecurity security;
    public FetchUnderstandAssistantInitiationActionsRequest withSecurity(FetchUnderstandAssistantInitiationActionsSecurity security) {
        this.security = security;
        return this;
    }
}