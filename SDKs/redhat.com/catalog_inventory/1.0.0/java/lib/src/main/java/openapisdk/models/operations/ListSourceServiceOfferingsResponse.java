package openapisdk.models.operations;



public class ListSourceServiceOfferingsResponse {
    public String contentType;
    public ListSourceServiceOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorNotFound errorNotFound;
    public ListSourceServiceOfferingsResponse withErrorNotFound(openapisdk.models.shared.ErrorNotFound errorNotFound) {
        this.errorNotFound = errorNotFound;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingsCollection serviceOfferingsCollection;
    public ListSourceServiceOfferingsResponse withServiceOfferingsCollection(openapisdk.models.shared.ServiceOfferingsCollection serviceOfferingsCollection) {
        this.serviceOfferingsCollection = serviceOfferingsCollection;
        return this;
    }
    public Long statusCode;
    public ListSourceServiceOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}