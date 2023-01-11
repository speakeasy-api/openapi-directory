package openapisdk.models.operations;



public class ListServiceOfferingServiceOfferingNodesResponse {
    public String contentType;
    public ListServiceOfferingServiceOfferingNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListServiceOfferingServiceOfferingNodesResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection;
    public ListServiceOfferingServiceOfferingNodesResponse withServiceOfferingNodesCollection(openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection) {
        this.serviceOfferingNodesCollection = serviceOfferingNodesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceOfferingServiceOfferingNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}