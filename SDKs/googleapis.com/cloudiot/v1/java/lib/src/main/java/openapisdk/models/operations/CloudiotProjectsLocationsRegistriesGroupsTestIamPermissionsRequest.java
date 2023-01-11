package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest {
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams pathParams;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest withPathParams(CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams queryParams;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest withQueryParams(CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity security;
    public CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsRequest withSecurity(CloudiotProjectsLocationsRegistriesGroupsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}