package openapisdk.models.operations;



public class AppengineAppsServicesVersionsInstancesGetResponse {
    public String contentType;
    public AppengineAppsServicesVersionsInstancesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Instance instance;
    public AppengineAppsServicesVersionsInstancesGetResponse withInstance(openapisdk.models.shared.Instance instance) {
        this.instance = instance;
        return this;
    }
    public Long statusCode;
    public AppengineAppsServicesVersionsInstancesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}