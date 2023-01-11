package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAssistantRequest {
    public String serverURL;
    public CreateAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAssistantCreateAssistantRequest request;
    public CreateAssistantRequest withRequest(CreateAssistantCreateAssistantRequest request) {
        this.request = request;
        return this;
    }
    public CreateAssistantSecurity security;
    public CreateAssistantRequest withSecurity(CreateAssistantSecurity security) {
        this.security = security;
        return this;
    }
}