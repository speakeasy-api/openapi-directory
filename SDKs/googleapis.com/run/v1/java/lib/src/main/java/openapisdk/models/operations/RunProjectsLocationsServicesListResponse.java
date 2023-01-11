package openapisdk.models.operations;



public class RunProjectsLocationsServicesListResponse {
    public String contentType;
    public RunProjectsLocationsServicesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListServicesResponse listServicesResponse;
    public RunProjectsLocationsServicesListResponse withListServicesResponse(openapisdk.models.shared.ListServicesResponse listServicesResponse) {
        this.listServicesResponse = listServicesResponse;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}