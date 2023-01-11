package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest {
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsPathParams pathParams;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest withPathParams(DomainsProjectsLocationsRegistrationsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsQueryParams queryParams;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest withQueryParams(DomainsProjectsLocationsRegistrationsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity security;
    public DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest withSecurity(DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}