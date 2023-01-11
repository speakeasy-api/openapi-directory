package openapisdk.models.operations;



public class AppengineAppsGetResponse {
    public openapisdk.models.shared.Application application;
    public AppengineAppsGetResponse withApplication(openapisdk.models.shared.Application application) {
        this.application = application;
        return this;
    }
    public String contentType;
    public AppengineAppsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}