package openapisdk.models.operations;



public class ListServiceOfferingsResponse {
    public String contentType;
    public ListServiceOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ServiceOfferingsCollection serviceOfferingsCollection;
    public ListServiceOfferingsResponse withServiceOfferingsCollection(openapisdk.models.shared.ServiceOfferingsCollection serviceOfferingsCollection) {
        this.serviceOfferingsCollection = serviceOfferingsCollection;
        return this;
    }
    public Long statusCode;
    public ListServiceOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}