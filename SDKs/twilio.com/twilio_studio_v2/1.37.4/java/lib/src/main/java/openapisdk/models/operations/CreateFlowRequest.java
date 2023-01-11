package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFlowRequest {
    public String serverURL;
    public CreateFlowRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFlowCreateFlowRequest request;
    public CreateFlowRequest withRequest(CreateFlowCreateFlowRequest request) {
        this.request = request;
        return this;
    }
    public CreateFlowSecurity security;
    public CreateFlowRequest withSecurity(CreateFlowSecurity security) {
        this.security = security;
        return this;
    }
}