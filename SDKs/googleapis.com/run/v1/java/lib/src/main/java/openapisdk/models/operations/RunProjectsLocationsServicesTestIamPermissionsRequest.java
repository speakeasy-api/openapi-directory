package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsServicesTestIamPermissionsRequest {
    public RunProjectsLocationsServicesTestIamPermissionsPathParams pathParams;
    public RunProjectsLocationsServicesTestIamPermissionsRequest withPathParams(RunProjectsLocationsServicesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsServicesTestIamPermissionsQueryParams queryParams;
    public RunProjectsLocationsServicesTestIamPermissionsRequest withQueryParams(RunProjectsLocationsServicesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public RunProjectsLocationsServicesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsServicesTestIamPermissionsSecurity security;
    public RunProjectsLocationsServicesTestIamPermissionsRequest withSecurity(RunProjectsLocationsServicesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}