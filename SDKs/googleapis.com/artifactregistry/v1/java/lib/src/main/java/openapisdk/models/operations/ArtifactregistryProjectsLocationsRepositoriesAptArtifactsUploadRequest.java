package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest {
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity security) {
        this.security = security;
        return this;
    }
}