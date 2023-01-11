package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandAssistantFallbackActionsRequest {
    public String serverURL;
    public UpdateUnderstandAssistantFallbackActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandAssistantFallbackActionsPathParams pathParams;
    public UpdateUnderstandAssistantFallbackActionsRequest withPathParams(UpdateUnderstandAssistantFallbackActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest request;
    public UpdateUnderstandAssistantFallbackActionsRequest withRequest(UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandAssistantFallbackActionsSecurity security;
    public UpdateUnderstandAssistantFallbackActionsRequest withSecurity(UpdateUnderstandAssistantFallbackActionsSecurity security) {
        this.security = security;
        return this;
    }
}