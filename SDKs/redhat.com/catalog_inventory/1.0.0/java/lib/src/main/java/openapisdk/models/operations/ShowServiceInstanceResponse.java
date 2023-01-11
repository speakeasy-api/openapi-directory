package openapisdk.models.operations;



public class ShowServiceInstanceResponse {
    public String contentType;
    public ShowServiceInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceInstanceResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceInstance serviceInstance;
    public ShowServiceInstanceResponse withServiceInstance(openapisdk.models.shared.ServiceInstance serviceInstance) {
        this.serviceInstance = serviceInstance;
        return this;
    }
    public Long statusCode;
    public ShowServiceInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}