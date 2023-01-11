package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest {
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Tag request;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest withRequest(openapisdk.models.shared.Tag request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity security) {
        this.security = security;
        return this;
    }
}