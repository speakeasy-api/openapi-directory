package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsSourcesGetIamPolicyRequest {
    public SecuritycenterOrganizationsSourcesGetIamPolicyPathParams pathParams;
    public SecuritycenterOrganizationsSourcesGetIamPolicyRequest withPathParams(SecuritycenterOrganizationsSourcesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsSourcesGetIamPolicyQueryParams queryParams;
    public SecuritycenterOrganizationsSourcesGetIamPolicyRequest withQueryParams(SecuritycenterOrganizationsSourcesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public SecuritycenterOrganizationsSourcesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsSourcesGetIamPolicySecurity security;
    public SecuritycenterOrganizationsSourcesGetIamPolicyRequest withSecurity(SecuritycenterOrganizationsSourcesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}