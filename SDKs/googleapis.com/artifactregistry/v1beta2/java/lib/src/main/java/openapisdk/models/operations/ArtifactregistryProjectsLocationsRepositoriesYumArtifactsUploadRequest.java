package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest {
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/octet-stream")
    public byte[] request;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity security) {
        this.security = security;
        return this;
    }
}