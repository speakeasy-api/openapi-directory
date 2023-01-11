package openapisdk.models.operations;



public class RunProjectsLocationsServicesCreateResponse {
    public String contentType;
    public RunProjectsLocationsServicesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public RunProjectsLocationsServicesCreateResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public RunProjectsLocationsServicesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}