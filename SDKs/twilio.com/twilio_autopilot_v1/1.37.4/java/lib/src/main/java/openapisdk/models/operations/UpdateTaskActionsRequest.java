package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTaskActionsRequest {
    public String serverURL;
    public UpdateTaskActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTaskActionsPathParams pathParams;
    public UpdateTaskActionsRequest withPathParams(UpdateTaskActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTaskActionsUpdateTaskActionsRequest request;
    public UpdateTaskActionsRequest withRequest(UpdateTaskActionsUpdateTaskActionsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTaskActionsSecurity security;
    public UpdateTaskActionsRequest withSecurity(UpdateTaskActionsSecurity security) {
        this.security = security;
        return this;
    }
}