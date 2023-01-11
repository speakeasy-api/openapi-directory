package openapisdk.models.operations;



public class ListServiceInstancesResponse {
    public String contentType;
    public ListServiceInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection;
    public ListServiceInstancesResponse withServiceInstancesCollection(openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection) {
        this.serviceInstancesCollection = serviceInstancesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}