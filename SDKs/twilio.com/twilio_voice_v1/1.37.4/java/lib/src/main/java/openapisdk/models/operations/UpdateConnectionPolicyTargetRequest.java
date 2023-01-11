package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyTargetRequest {
    public String serverURL;
    public UpdateConnectionPolicyTargetRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConnectionPolicyTargetPathParams pathParams;
    public UpdateConnectionPolicyTargetRequest withPathParams(UpdateConnectionPolicyTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest request;
    public UpdateConnectionPolicyTargetRequest withRequest(UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConnectionPolicyTargetSecurity security;
    public UpdateConnectionPolicyTargetRequest withSecurity(UpdateConnectionPolicyTargetSecurity security) {
        this.security = security;
        return this;
    }
}