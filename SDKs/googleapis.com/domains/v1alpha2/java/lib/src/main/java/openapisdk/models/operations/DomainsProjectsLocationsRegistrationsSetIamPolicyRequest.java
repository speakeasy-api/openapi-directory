package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsSetIamPolicyRequest {
    public DomainsProjectsLocationsRegistrationsSetIamPolicyPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyRequest withPathParams(DomainsProjectsLocationsRegistrationsSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsSetIamPolicyQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyRequest withQueryParams(DomainsProjectsLocationsRegistrationsSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsSetIamPolicySecurity security;
    public DomainsProjectsLocationsRegistrationsSetIamPolicyRequest withSecurity(DomainsProjectsLocationsRegistrationsSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}