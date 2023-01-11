package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IdentitytoolkitProjectsTenantsGetIamPolicyRequest {
    public IdentitytoolkitProjectsTenantsGetIamPolicyPathParams pathParams;
    public IdentitytoolkitProjectsTenantsGetIamPolicyRequest withPathParams(IdentitytoolkitProjectsTenantsGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams queryParams;
    public IdentitytoolkitProjectsTenantsGetIamPolicyRequest withQueryParams(IdentitytoolkitProjectsTenantsGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleIamV1GetIamPolicyRequest request;
    public IdentitytoolkitProjectsTenantsGetIamPolicyRequest withRequest(openapisdk.models.shared.GoogleIamV1GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public IdentitytoolkitProjectsTenantsGetIamPolicySecurity security;
    public IdentitytoolkitProjectsTenantsGetIamPolicyRequest withSecurity(IdentitytoolkitProjectsTenantsGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}