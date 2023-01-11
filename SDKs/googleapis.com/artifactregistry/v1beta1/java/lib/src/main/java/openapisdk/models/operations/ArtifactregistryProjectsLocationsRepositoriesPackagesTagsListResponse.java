package openapisdk.models.operations;



public class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse {
    public String contentType;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Long statusCode;
    public ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}