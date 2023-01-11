package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlowRequest {
    public String serverURL;
    public UpdateFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFlowPathParams pathParams;
    public UpdateFlowRequest withPathParams(UpdateFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFlowUpdateFlowRequest request;
    public UpdateFlowRequest withRequest(UpdateFlowUpdateFlowRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFlowSecurity security;
    public UpdateFlowRequest withSecurity(UpdateFlowSecurity security) {
        this.security = security;
        return this;
    }
}