package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccesscontextmanagerAccessPoliciesGetIamPolicyRequest {
    public AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams pathParams;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyRequest withPathParams(AccesscontextmanagerAccessPoliciesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams queryParams;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyRequest withQueryParams(AccesscontextmanagerAccessPoliciesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public AccesscontextmanagerAccessPoliciesGetIamPolicySecurity security;
    public AccesscontextmanagerAccessPoliciesGetIamPolicyRequest withSecurity(AccesscontextmanagerAccessPoliciesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}