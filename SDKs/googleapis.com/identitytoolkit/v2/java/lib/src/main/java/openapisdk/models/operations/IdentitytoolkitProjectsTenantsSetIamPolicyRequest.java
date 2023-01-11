package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsSetIamPolicyRequest {
    public IdentitytoolkitProjectsTenantsSetIamPolicyPathParams pathParams;
    public IdentitytoolkitProjectsTenantsSetIamPolicyRequest withPathParams(IdentitytoolkitProjectsTenantsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsSetIamPolicyRequest withQueryParams(IdentitytoolkitProjectsTenantsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request;
    public IdentitytoolkitProjectsTenantsSetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsSetIamPolicySecurity security;
    public IdentitytoolkitProjectsTenantsSetIamPolicyRequest withSecurity(IdentitytoolkitProjectsTenantsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}