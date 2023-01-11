package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest {
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportAptArtifactsRequest request;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest withRequest(openapisdk.models.shared.ImportAptArtifactsRequest request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity security) {
        this.security = security;
        return this;
    }
}