package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest {
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams pathParams;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest withPathParams(ApigeeregistryProjectsLocationsArtifactsReplaceArtifactPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactQueryParams queryParams;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest withQueryParams(ApigeeregistryProjectsLocationsArtifactsReplaceArtifactQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArtifactInput request;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest withRequest(openapisdk.models.shared.ArtifactInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity security;
    public ApigeeregistryProjectsLocationsArtifactsReplaceArtifactRequest withSecurity(ApigeeregistryProjectsLocationsArtifactsReplaceArtifactSecurity security) {
        this.security = security;
        return this;
    }
}