package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest {
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest withPathParams(NotebooksProjectsLocationsRuntimesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest withQueryParams(NotebooksProjectsLocationsRuntimesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity security;
    public NotebooksProjectsLocationsRuntimesTestIamPermissionsRequest withSecurity(NotebooksProjectsLocationsRuntimesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}