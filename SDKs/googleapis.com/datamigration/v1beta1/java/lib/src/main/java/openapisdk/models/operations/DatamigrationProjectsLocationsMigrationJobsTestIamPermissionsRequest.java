package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest {
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams pathParams;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest withPathParams(DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsQueryParams queryParams;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest withQueryParams(DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity security;
    public DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest withSecurity(DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}