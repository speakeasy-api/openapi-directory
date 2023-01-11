package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandTaskActionsRequest {
    public String serverURL;
    public UpdateUnderstandTaskActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandTaskActionsPathParams pathParams;
    public UpdateUnderstandTaskActionsRequest withPathParams(UpdateUnderstandTaskActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest request;
    public UpdateUnderstandTaskActionsRequest withRequest(UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandTaskActionsSecurity security;
    public UpdateUnderstandTaskActionsRequest withSecurity(UpdateUnderstandTaskActionsSecurity security) {
        this.security = security;
        return this;
    }
}