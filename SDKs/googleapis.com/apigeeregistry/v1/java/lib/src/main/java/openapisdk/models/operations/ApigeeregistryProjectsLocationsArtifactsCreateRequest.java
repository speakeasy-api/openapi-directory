package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApigeeregistryProjectsLocationsArtifactsCreateRequest {
    public ApigeeregistryProjectsLocationsArtifactsCreatePathParams pathParams;
    public ApigeeregistryProjectsLocationsArtifactsCreateRequest withPathParams(ApigeeregistryProjectsLocationsArtifactsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ApigeeregistryProjectsLocationsArtifactsCreateQueryParams queryParams;
    public ApigeeregistryProjectsLocationsArtifactsCreateRequest withQueryParams(ApigeeregistryProjectsLocationsArtifactsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ArtifactInput request;
    public ApigeeregistryProjectsLocationsArtifactsCreateRequest withRequest(openapisdk.models.shared.ArtifactInput request) {
        this.request = request;
        return this;
    }
    public ApigeeregistryProjectsLocationsArtifactsCreateSecurity security;
    public ApigeeregistryProjectsLocationsArtifactsCreateRequest withSecurity(ApigeeregistryProjectsLocationsArtifactsCreateSecurity security) {
        this.security = security;
        return this;
    }
}