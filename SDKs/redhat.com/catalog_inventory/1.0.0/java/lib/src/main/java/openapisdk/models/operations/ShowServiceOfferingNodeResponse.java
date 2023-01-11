package openapisdk.models.operations;



public class ShowServiceOfferingNodeResponse {
    public String contentType;
    public ShowServiceOfferingNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceOfferingNodeResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingNode serviceOfferingNode;
    public ShowServiceOfferingNodeResponse withServiceOfferingNode(openapisdk.models.shared.ServiceOfferingNode serviceOfferingNode) {
        this.serviceOfferingNode = serviceOfferingNode;
        return this;
    }
    public Long statusCode;
    public ShowServiceOfferingNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}