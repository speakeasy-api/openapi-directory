package openapisdk.models.operations;



public class PostOfferingsOfferingIdUsersResponse {
    public String contentType;
    public PostOfferingsOfferingIdUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsOfferingIdUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingUserAddResponse[] offeringUserAddResponses;
    public PostOfferingsOfferingIdUsersResponse withOfferingUserAddResponses(openapisdk.models.shared.OfferingUserAddResponse[] offeringUserAddResponses) {
        this.offeringUserAddResponses = offeringUserAddResponses;
        return this;
    }
    public Long statusCode;
    public PostOfferingsOfferingIdUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] postOfferingsOfferingIdUsers207ApplicationJSONOneoves;
    public PostOfferingsOfferingIdUsersResponse withPostOfferingsOfferingIdUsers207ApplicationJsonOneoves(Object[] postOfferingsOfferingIdUsers207ApplicationJSONOneoves) {
        this.postOfferingsOfferingIdUsers207ApplicationJSONOneoves = postOfferingsOfferingIdUsers207ApplicationJSONOneoves;
        return this;
    }
}