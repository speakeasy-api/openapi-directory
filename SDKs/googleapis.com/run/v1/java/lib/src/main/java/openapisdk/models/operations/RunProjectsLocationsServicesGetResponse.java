package openapisdk.models.operations;



public class RunProjectsLocationsServicesGetResponse {
    public String contentType;
    public RunProjectsLocationsServicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public RunProjectsLocationsServicesGetResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}