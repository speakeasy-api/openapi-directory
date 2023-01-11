package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BinaryauthorizationProjectsPolicySetIamPolicyRequest {
    public BinaryauthorizationProjectsPolicySetIamPolicyPathParams pathParams;
    public BinaryauthorizationProjectsPolicySetIamPolicyRequest withPathParams(BinaryauthorizationProjectsPolicySetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BinaryauthorizationProjectsPolicySetIamPolicyQueryParams queryParams;
    public BinaryauthorizationProjectsPolicySetIamPolicyRequest withQueryParams(BinaryauthorizationProjectsPolicySetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public BinaryauthorizationProjectsPolicySetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public BinaryauthorizationProjectsPolicySetIamPolicySecurity security;
    public BinaryauthorizationProjectsPolicySetIamPolicyRequest withSecurity(BinaryauthorizationProjectsPolicySetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}