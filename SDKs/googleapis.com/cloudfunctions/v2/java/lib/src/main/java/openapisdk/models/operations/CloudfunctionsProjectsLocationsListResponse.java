package openapisdk.models.operations;



public class CloudfunctionsProjectsLocationsListResponse {
    public String contentType;
    public CloudfunctionsProjectsLocationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLocationsResponse listLocationsResponse;
    public CloudfunctionsProjectsLocationsListResponse withListLocationsResponse(openapisdk.models.shared.ListLocationsResponse listLocationsResponse) {
        this.listLocationsResponse = listLocationsResponse;
        return this;
    }
    public Long statusCode;
    public CloudfunctionsProjectsLocationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}