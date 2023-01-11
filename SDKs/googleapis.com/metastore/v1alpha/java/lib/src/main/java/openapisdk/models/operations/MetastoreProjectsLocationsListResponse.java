package openapisdk.models.operations;



public class MetastoreProjectsLocationsListResponse {
    public String contentType;
    public MetastoreProjectsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationsResponse listLocationsResponse;
    public MetastoreProjectsLocationsListResponse withListLocationsResponse(openapisdk.models.shared.ListLocationsResponse listLocationsResponse) {
        this.listLocationsResponse = listLocationsResponse;
        return this;
    }
    public Long statusCode;
    public MetastoreProjectsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}