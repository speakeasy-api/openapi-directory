package openapisdk.models.operations;



public class AppengineProjectsLocationsApplicationsGetResponse {
    public openapisdk.models.shared.Application application;
    public AppengineProjectsLocationsApplicationsGetResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public AppengineProjectsLocationsApplicationsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineProjectsLocationsApplicationsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}