package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConnectionPolicyRequest {
    public String serverURL;
    public CreateConnectionPolicyRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConnectionPolicyCreateConnectionPolicyRequest request;
    public CreateConnectionPolicyRequest withRequest(CreateConnectionPolicyCreateConnectionPolicyRequest request) {
        this.request = request;
        return this;
    }
    public CreateConnectionPolicySecurity security;
    public CreateConnectionPolicyRequest withSecurity(CreateConnectionPolicySecurity security) {
        this.security = security;
        return this;
    }
}