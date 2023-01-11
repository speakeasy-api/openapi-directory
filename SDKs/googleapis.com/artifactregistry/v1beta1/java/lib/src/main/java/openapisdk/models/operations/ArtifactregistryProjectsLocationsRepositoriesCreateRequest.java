package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesCreateRequest {
    public ArtifactregistryProjectsLocationsRepositoriesCreatePathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesCreateRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesCreateQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesCreateRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RepositoryInput request;
    public ArtifactregistryProjectsLocationsRepositoriesCreateRequest withRequest(openapisdk.models.shared.RepositoryInput request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesCreateSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesCreateRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}