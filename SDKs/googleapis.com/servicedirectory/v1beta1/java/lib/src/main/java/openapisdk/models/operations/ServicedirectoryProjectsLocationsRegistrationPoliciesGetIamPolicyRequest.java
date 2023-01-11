package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest {
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams pathParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest withPathParams(ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyQueryParams queryParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest withQueryParams(ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetIamPolicyRequest request;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest withRequest(openapisdk.models.shared.GetIamPolicyRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity security;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest withSecurity(ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity security) {
        this.security = security;
        return this;
    }
}