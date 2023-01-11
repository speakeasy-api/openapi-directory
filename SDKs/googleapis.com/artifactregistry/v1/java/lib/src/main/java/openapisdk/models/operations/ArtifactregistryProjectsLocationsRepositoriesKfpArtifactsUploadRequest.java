package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest {
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity security) {
        this.security = security;
        return this;
    }
}