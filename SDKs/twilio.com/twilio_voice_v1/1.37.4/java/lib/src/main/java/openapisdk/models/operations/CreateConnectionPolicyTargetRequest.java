package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionPolicyTargetRequest {
    public String serverURL;
    public CreateConnectionPolicyTargetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateConnectionPolicyTargetPathParams pathParams;
    public CreateConnectionPolicyTargetRequest withPathParams(CreateConnectionPolicyTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest request;
    public CreateConnectionPolicyTargetRequest withRequest(CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest request) {
        this.request = request;
        return this;
    }
    public CreateConnectionPolicyTargetSecurity security;
    public CreateConnectionPolicyTargetRequest withSecurity(CreateConnectionPolicyTargetSecurity security) {
        this.security = security;
        return this;
    }
}