package openapisdk.models.operations;



public class AppengineAppsServicesGetResponse {
    public String contentType;
    public AppengineAppsServicesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Service service;
    public AppengineAppsServicesGetResponse withService(openapisdk.models.shared.Service service) {
        this.service = service;
        return this;
    }
    public Long statusCode;
    public AppengineAppsServicesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}