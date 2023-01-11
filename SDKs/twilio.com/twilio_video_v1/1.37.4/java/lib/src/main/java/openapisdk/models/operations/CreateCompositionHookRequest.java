package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCompositionHookRequest {
    public String serverURL;
    public CreateCompositionHookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateCompositionHookCreateCompositionHookRequest request;
    public CreateCompositionHookRequest withRequest(CreateCompositionHookCreateCompositionHookRequest request) {
        this.request = request;
        return this;
    }
    public CreateCompositionHookSecurity security;
    public CreateCompositionHookRequest withSecurity(CreateCompositionHookSecurity security) {
        this.security = security;
        return this;
    }
}