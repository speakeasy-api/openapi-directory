package openapisdk.models.operations;



public class ListServiceOfferingServicePlansResponse {
    public String contentType;
    public ListServiceOfferingServicePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListServiceOfferingServicePlansResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServicePlansCollection servicePlansCollection;
    public ListServiceOfferingServicePlansResponse withServicePlansCollection(openapisdk.models.shared.ServicePlansCollection servicePlansCollection) {
        this.servicePlansCollection = servicePlansCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceOfferingServicePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}