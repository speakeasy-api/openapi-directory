package openapisdk.models.operations;



public class GkebackupProjectsLocationsListResponse {
    public String contentType;
    public GkebackupProjectsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationsResponse listLocationsResponse;
    public GkebackupProjectsLocationsListResponse withListLocationsResponse(openapisdk.models.shared.ListLocationsResponse listLocationsResponse) {
        this.listLocationsResponse = listLocationsResponse;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}