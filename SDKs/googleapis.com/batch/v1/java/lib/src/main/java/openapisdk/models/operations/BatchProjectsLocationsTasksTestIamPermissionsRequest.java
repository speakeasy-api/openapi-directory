package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsTasksTestIamPermissionsRequest {
    public BatchProjectsLocationsTasksTestIamPermissionsPathParams pathParams;
    public BatchProjectsLocationsTasksTestIamPermissionsRequest withPathParams(BatchProjectsLocationsTasksTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchProjectsLocationsTasksTestIamPermissionsQueryParams queryParams;
    public BatchProjectsLocationsTasksTestIamPermissionsRequest withQueryParams(BatchProjectsLocationsTasksTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public BatchProjectsLocationsTasksTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public BatchProjectsLocationsTasksTestIamPermissionsSecurity security;
    public BatchProjectsLocationsTasksTestIamPermissionsRequest withSecurity(BatchProjectsLocationsTasksTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}