package openapisdk.models.operations;



public class MemcacheProjectsLocationsListResponse {
    public String contentType;
    public MemcacheProjectsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationsResponse listLocationsResponse;
    public MemcacheProjectsLocationsListResponse withListLocationsResponse(openapisdk.models.shared.ListLocationsResponse listLocationsResponse) {
        this.listLocationsResponse = listLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MemcacheProjectsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}