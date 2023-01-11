package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlexFlowRequest {
    public String serverURL;
    public UpdateFlexFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFlexFlowPathParams pathParams;
    public UpdateFlexFlowRequest withPathParams(UpdateFlexFlowPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFlexFlowUpdateFlexFlowRequest request;
    public UpdateFlexFlowRequest withRequest(UpdateFlexFlowUpdateFlexFlowRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFlexFlowSecurity security;
    public UpdateFlexFlowRequest withSecurity(UpdateFlexFlowSecurity security) {
        this.security = security;
        return this;
    }
}