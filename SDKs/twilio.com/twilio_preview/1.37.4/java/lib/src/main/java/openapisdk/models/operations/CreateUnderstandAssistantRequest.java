package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandAssistantRequest {
    public String serverURL;
    public CreateUnderstandAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandAssistantCreateUnderstandAssistantRequest request;
    public CreateUnderstandAssistantRequest withRequest(CreateUnderstandAssistantCreateUnderstandAssistantRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandAssistantSecurity security;
    public CreateUnderstandAssistantRequest withSecurity(CreateUnderstandAssistantSecurity security) {
        this.security = security;
        return this;
    }
}