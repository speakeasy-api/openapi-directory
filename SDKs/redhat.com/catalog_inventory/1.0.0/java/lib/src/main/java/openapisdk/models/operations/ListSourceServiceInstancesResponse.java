package openapisdk.models.operations;



public class ListSourceServiceInstancesResponse {
    public String contentType;
    public ListSourceServiceInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceServiceInstancesResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection;
    public ListSourceServiceInstancesResponse withServiceInstancesCollection(openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection) {
        this.serviceInstancesCollection = serviceInstancesCollection;
        return this;
    }
    public Long statusCode;
    public ListSourceServiceInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}