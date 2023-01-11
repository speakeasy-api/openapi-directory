package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandAssistantRequest {
    public String serverURL;
    public UpdateUnderstandAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandAssistantPathParams pathParams;
    public UpdateUnderstandAssistantRequest withPathParams(UpdateUnderstandAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandAssistantUpdateUnderstandAssistantRequest request;
    public UpdateUnderstandAssistantRequest withRequest(UpdateUnderstandAssistantUpdateUnderstandAssistantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandAssistantSecurity security;
    public UpdateUnderstandAssistantRequest withSecurity(UpdateUnderstandAssistantSecurity security) {
        this.security = security;
        return this;
    }
}