package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest {
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestIamPermissionsRequest request;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest withRequest(openapisdk.models.shared.TestIamPermissionsRequest request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity security) {
        this.security = security;
        return this;
    }
}