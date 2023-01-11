package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesSetIamPolicyRequest {
    public AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyRequest withPathParams(AccesscontextmanagerAccessPoliciesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesSetIamPolicyQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyRequest withQueryParams(AccesscontextmanagerAccessPoliciesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesSetIamPolicySecurity security;
    public AccesscontextmanagerAccessPoliciesSetIamPolicyRequest withSecurity(AccesscontextmanagerAccessPoliciesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}