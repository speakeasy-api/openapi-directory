package openapisdk.models.operations;



public class ListServiceOfferingServiceInstancesResponse {
    public String contentType;
    public ListServiceOfferingServiceInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListServiceOfferingServiceInstancesResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection;
    public ListServiceOfferingServiceInstancesResponse withServiceInstancesCollection(openapisdk.models.shared.ServiceInstancesCollection serviceInstancesCollection) {
        this.serviceInstancesCollection = serviceInstancesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceOfferingServiceInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}