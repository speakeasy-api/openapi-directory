package openapisdk.models.operations;



public class GetOfferingsOfferingIdUsersMarkerEmailMarksResponse {
    public String contentType;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingUser[] offeringUsers;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksResponse withOfferingUsers(openapisdk.models.shared.OfferingUser[] offeringUsers) {
        this.offeringUsers = offeringUsers;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdUsersMarkerEmailMarksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}