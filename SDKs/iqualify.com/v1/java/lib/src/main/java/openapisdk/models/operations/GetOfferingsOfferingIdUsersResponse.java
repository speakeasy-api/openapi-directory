package openapisdk.models.operations;



public class GetOfferingsOfferingIdUsersResponse {
    public String contentType;
    public GetOfferingsOfferingIdUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdUsersResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingUserResponse[] offeringUserResponses;
    public GetOfferingsOfferingIdUsersResponse withOfferingUserResponses(openapisdk.models.shared.OfferingUserResponse[] offeringUserResponses) {
        this.offeringUserResponses = offeringUserResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}