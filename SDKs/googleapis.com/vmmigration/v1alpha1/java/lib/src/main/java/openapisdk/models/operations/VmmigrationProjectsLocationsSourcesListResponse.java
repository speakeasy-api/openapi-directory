package openapisdk.models.operations;



public class VmmigrationProjectsLocationsSourcesListResponse {
    public String contentType;
    public VmmigrationProjectsLocationsSourcesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSourcesResponse listSourcesResponse;
    public VmmigrationProjectsLocationsSourcesListResponse withListSourcesResponse(openapisdk.models.shared.ListSourcesResponse listSourcesResponse) {
        this.listSourcesResponse = listSourcesResponse;
        return this;
    }
    public Long statusCode;
    public VmmigrationProjectsLocationsSourcesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}