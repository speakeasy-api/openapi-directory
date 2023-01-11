package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCompositionHookRequest {
    public String serverURL;
    public UpdateCompositionHookRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateCompositionHookPathParams pathParams;
    public UpdateCompositionHookRequest withPathParams(UpdateCompositionHookPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateCompositionHookUpdateCompositionHookRequest request;
    public UpdateCompositionHookRequest withRequest(UpdateCompositionHookUpdateCompositionHookRequest request) {
        this.request = request;
        return this;
    }
    public UpdateCompositionHookSecurity security;
    public UpdateCompositionHookRequest withSecurity(UpdateCompositionHookSecurity security) {
        this.security = security;
        return this;
    }
}