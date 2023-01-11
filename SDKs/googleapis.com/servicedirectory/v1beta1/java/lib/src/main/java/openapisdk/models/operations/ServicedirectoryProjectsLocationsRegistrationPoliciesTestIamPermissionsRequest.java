package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest {
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams pathParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest withPathParams(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams queryParams;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest withQueryParams(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity security;
    public ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest withSecurity(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}