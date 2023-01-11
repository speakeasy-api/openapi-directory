package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandAssistantInitiationActionsRequest {
    public String serverURL;
    public UpdateUnderstandAssistantInitiationActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandAssistantInitiationActionsPathParams pathParams;
    public UpdateUnderstandAssistantInitiationActionsRequest withPathParams(UpdateUnderstandAssistantInitiationActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest request;
    public UpdateUnderstandAssistantInitiationActionsRequest withRequest(UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandAssistantInitiationActionsSecurity security;
    public UpdateUnderstandAssistantInitiationActionsRequest withSecurity(UpdateUnderstandAssistantInitiationActionsSecurity security) {
        this.security = security;
        return this;
    }
}