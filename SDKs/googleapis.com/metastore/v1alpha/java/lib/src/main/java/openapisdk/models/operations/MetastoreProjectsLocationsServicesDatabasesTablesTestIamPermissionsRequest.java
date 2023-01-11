package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest {
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams pathParams;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest withPathParams(MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsQueryParams queryParams;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest withQueryParams(MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity security;
    public MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsRequest withSecurity(MetastoreProjectsLocationsServicesDatabasesTablesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}