package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectionPolicyRequest {
    public String serverURL;
    public UpdateConnectionPolicyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConnectionPolicyPathParams pathParams;
    public UpdateConnectionPolicyRequest withPathParams(UpdateConnectionPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConnectionPolicyUpdateConnectionPolicyRequest request;
    public UpdateConnectionPolicyRequest withRequest(UpdateConnectionPolicyUpdateConnectionPolicyRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConnectionPolicySecurity security;
    public UpdateConnectionPolicyRequest withSecurity(UpdateConnectionPolicySecurity security) {
        this.security = security;
        return this;
    }
}