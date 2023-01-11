package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlowValidateRequest {
    public String serverURL;
    public UpdateFlowValidateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFlowValidateUpdateFlowValidateRequest request;
    public UpdateFlowValidateRequest withRequest(UpdateFlowValidateUpdateFlowValidateRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFlowValidateSecurity security;
    public UpdateFlowValidateRequest withSecurity(UpdateFlowValidateSecurity security) {
        this.security = security;
        return this;
    }
}