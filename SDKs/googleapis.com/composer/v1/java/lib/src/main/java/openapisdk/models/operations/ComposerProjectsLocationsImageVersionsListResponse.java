package openapisdk.models.operations;



public class ComposerProjectsLocationsImageVersionsListResponse {
    public String contentType;
    public ComposerProjectsLocationsImageVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListImageVersionsResponse listImageVersionsResponse;
    public ComposerProjectsLocationsImageVersionsListResponse withListImageVersionsResponse(openapisdk.models.shared.ListImageVersionsResponse listImageVersionsResponse) {
        this.listImageVersionsResponse = listImageVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ComposerProjectsLocationsImageVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}