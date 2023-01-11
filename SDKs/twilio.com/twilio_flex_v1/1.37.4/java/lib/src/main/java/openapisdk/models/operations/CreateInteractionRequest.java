package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInteractionRequest {
    public String serverURL;
    public CreateInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateInteractionCreateInteractionRequest request;
    public CreateInteractionRequest withRequest(CreateInteractionCreateInteractionRequest request) {
        this.request = request;
        return this;
    }
    public CreateInteractionSecurity security;
    public CreateInteractionRequest withSecurity(CreateInteractionSecurity security) {
        this.security = security;
        return this;
    }
}