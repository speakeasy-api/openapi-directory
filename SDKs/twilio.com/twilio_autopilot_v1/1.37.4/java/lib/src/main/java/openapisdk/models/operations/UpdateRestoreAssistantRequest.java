package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRestoreAssistantRequest {
    public String serverURL;
    public UpdateRestoreAssistantRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRestoreAssistantUpdateRestoreAssistantRequest request;
    public UpdateRestoreAssistantRequest withRequest(UpdateRestoreAssistantUpdateRestoreAssistantRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRestoreAssistantSecurity security;
    public UpdateRestoreAssistantRequest withSecurity(UpdateRestoreAssistantSecurity security) {
        this.security = security;
        return this;
    }
}