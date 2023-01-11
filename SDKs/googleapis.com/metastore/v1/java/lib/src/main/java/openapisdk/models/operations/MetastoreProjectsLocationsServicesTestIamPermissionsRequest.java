package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesTestIamPermissionsRequest {
    public MetastoreProjectsLocationsServicesTestIamPermissionsPathParams pathParams;
    public MetastoreProjectsLocationsServicesTestIamPermissionsRequest withPathParams(MetastoreProjectsLocationsServicesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesTestIamPermissionsQueryParams queryParams;
    public MetastoreProjectsLocationsServicesTestIamPermissionsRequest withQueryParams(MetastoreProjectsLocationsServicesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public MetastoreProjectsLocationsServicesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesTestIamPermissionsSecurity security;
    public MetastoreProjectsLocationsServicesTestIamPermissionsRequest withSecurity(MetastoreProjectsLocationsServicesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}