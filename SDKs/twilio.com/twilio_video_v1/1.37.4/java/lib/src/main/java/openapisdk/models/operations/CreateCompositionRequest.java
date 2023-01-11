package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCompositionRequest {
    public String serverURL;
    public CreateCompositionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCompositionCreateCompositionRequest request;
    public CreateCompositionRequest withRequest(CreateCompositionCreateCompositionRequest request) {
        this.request = request;
        return this;
    }
    public CreateCompositionSecurity security;
    public CreateCompositionRequest withSecurity(CreateCompositionSecurity security) {
        this.security = security;
        return this;
    }
}