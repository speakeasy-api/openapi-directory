package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest {
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams pathParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest withPathParams(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams queryParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest withQueryParams(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetIamPolicyRequest request;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest withRequest(openapisdk.models.shared.SetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity security;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest withSecurity(ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}