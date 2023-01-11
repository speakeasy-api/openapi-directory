package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesSetIamPolicyRequest {
    public SecuritycenterOrganizationsSourcesSetIamPolicyPathParams pathParams;
    public SecuritycenterOrganizationsSourcesSetIamPolicyRequest withPathParams(SecuritycenterOrganizationsSourcesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesSetIamPolicyRequest withQueryParams(SecuritycenterOrganizationsSourcesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public SecuritycenterOrganizationsSourcesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesSetIamPolicySecurity security;
    public SecuritycenterOrganizationsSourcesSetIamPolicyRequest withSecurity(SecuritycenterOrganizationsSourcesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}