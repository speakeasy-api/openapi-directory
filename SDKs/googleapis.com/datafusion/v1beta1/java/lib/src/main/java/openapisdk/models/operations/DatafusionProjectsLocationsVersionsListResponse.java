package openapisdk.models.operations;



public class DatafusionProjectsLocationsVersionsListResponse {
    public String contentType;
    public DatafusionProjectsLocationsVersionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAvailableVersionsResponse listAvailableVersionsResponse;
    public DatafusionProjectsLocationsVersionsListResponse withListAvailableVersionsResponse(openapisdk.models.shared.ListAvailableVersionsResponse listAvailableVersionsResponse) {
        this.listAvailableVersionsResponse = listAvailableVersionsResponse;
        return this;
    }
    public Long statusCode;
    public DatafusionProjectsLocationsVersionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}