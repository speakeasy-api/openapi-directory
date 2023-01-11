package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFlexFlowRequest {
    public String serverURL;
    public CreateFlexFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFlexFlowCreateFlexFlowRequest request;
    public CreateFlexFlowRequest withRequest(CreateFlexFlowCreateFlexFlowRequest request) {
        this.request = request;
        return this;
    }
    public CreateFlexFlowSecurity security;
    public CreateFlexFlowRequest withSecurity(CreateFlexFlowSecurity security) {
        this.security = security;
        return this;
    }
}