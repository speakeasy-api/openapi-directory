package openapisdk.models.operations;



public class ShowServiceOfferingResponse {
    public String contentType;
    public ShowServiceOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ShowServiceOfferingResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceOffering serviceOffering;
    public ShowServiceOfferingResponse withServiceOffering(openapisdk.models.shared.ServiceOffering serviceOffering) {
        this.serviceOffering = serviceOffering;
        return this;
    }
    public Long statusCode;
    public ShowServiceOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}