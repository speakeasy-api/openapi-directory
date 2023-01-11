package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest {
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImportYumArtifactsRequest request;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest withRequest(openapisdk.models.shared.ImportYumArtifactsRequest request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsImportSecurity security) {
        this.security = security;
        return this;
    }
}