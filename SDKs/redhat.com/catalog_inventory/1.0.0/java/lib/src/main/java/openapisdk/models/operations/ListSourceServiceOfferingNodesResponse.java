package openapisdk.models.operations;



public class ListSourceServiceOfferingNodesResponse {
    public String contentType;
    public ListSourceServiceOfferingNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceServiceOfferingNodesResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection;
    public ListSourceServiceOfferingNodesResponse withServiceOfferingNodesCollection(openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection) {
        this.serviceOfferingNodesCollection = serviceOfferingNodesCollection;
        return this;
    }
    public Long statusCode;
    public ListSourceServiceOfferingNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}