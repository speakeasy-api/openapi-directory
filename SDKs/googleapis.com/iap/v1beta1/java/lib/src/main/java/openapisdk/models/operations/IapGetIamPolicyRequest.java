package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IapGetIamPolicyRequest {
    public IapGetIamPolicyPathParams pathParams;
    public IapGetIamPolicyRequest withPathParams(IapGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IapGetIamPolicyQueryParams queryParams;
    public IapGetIamPolicyRequest withQueryParams(IapGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public IapGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IapGetIamPolicySecurity security;
    public IapGetIamPolicyRequest withSecurity(IapGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}