package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest {
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams pathParams;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest withPathParams(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams queryParams;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest withQueryParams(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Tag request;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest withRequest(openapisdk.models.shared.Tag request) {
        this.request = request;
        return this;
    }
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity security;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest withSecurity(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity security) {
        this.security = security;
        return this;
    }
}