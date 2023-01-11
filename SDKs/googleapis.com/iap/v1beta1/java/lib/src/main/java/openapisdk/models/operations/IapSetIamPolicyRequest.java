package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapSetIamPolicyRequest {
    public IapSetIamPolicyPathParams pathParams;
    public IapSetIamPolicyRequest withPathParams(IapSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapSetIamPolicyQueryParams queryParams;
    public IapSetIamPolicyRequest withQueryParams(IapSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public IapSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IapSetIamPolicySecurity security;
    public IapSetIamPolicyRequest withSecurity(IapSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}