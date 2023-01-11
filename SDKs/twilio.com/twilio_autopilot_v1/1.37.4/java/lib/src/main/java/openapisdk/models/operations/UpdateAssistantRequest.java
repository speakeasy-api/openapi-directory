package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAssistantRequest {
    public String serverURL;
    public UpdateAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAssistantPathParams pathParams;
    public UpdateAssistantRequest withPathParams(UpdateAssistantPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAssistantUpdateAssistantRequest request;
    public UpdateAssistantRequest withRequest(UpdateAssistantUpdateAssistantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAssistantSecurity security;
    public UpdateAssistantRequest withSecurity(UpdateAssistantSecurity security) {
        this.security = security;
        return this;
    }
}