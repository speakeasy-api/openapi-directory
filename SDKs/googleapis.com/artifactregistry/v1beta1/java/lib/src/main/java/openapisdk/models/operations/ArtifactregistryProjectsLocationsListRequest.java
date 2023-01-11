package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsListRequest {
    public ArtifactregistryProjectsLocationsListPathParams pathParams;
    public ArtifactregistryProjectsLocationsListRequest withPathParams(ArtifactregistryProjectsLocationsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsListQueryParams queryParams;
    public ArtifactregistryProjectsLocationsListRequest withQueryParams(ArtifactregistryProjectsLocationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ArtifactregistryProjectsLocationsListSecurity security;
    public ArtifactregistryProjectsLocationsListRequest withSecurity(ArtifactregistryProjectsLocationsListSecurity security) {
        this.security = security;
        return this;
    }
}