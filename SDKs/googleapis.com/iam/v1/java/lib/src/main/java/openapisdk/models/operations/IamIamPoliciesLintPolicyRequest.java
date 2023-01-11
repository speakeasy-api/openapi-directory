package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamIamPoliciesLintPolicyRequest {
    public IamIamPoliciesLintPolicyQueryParams queryParams;
    public IamIamPoliciesLintPolicyRequest withQueryParams(IamIamPoliciesLintPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LintPolicyRequest request;
    public IamIamPoliciesLintPolicyRequest withRequest(openapisdk.models.shared.LintPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IamIamPoliciesLintPolicySecurity security;
    public IamIamPoliciesLintPolicyRequest withSecurity(IamIamPoliciesLintPolicySecurity security) {
        this.security = security;
        return this;
    }
}