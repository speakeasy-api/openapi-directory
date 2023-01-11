package openapisdk.models.operations;



public class AppengineAppsServicesVersionsGetResponse {
    public String contentType;
    public AppengineAppsServicesVersionsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppengineAppsServicesVersionsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Version version;
    public AppengineAppsServicesVersionsGetResponse withVersion(openapisdk.models.shared.Version version) {
        this.version = version;
        return this;
    }
}