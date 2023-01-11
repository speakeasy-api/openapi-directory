package openapisdk.models.operations;



public class ListServiceOfferingNodesResponse {
    public String contentType;
    public ListServiceOfferingNodesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection;
    public ListServiceOfferingNodesResponse withServiceOfferingNodesCollection(openapisdk.models.shared.ServiceOfferingNodesCollection serviceOfferingNodesCollection) {
        this.serviceOfferingNodesCollection = serviceOfferingNodesCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceOfferingNodesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}