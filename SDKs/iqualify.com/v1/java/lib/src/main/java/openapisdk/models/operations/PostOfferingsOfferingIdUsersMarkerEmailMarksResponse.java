package openapisdk.models.operations;



public class PostOfferingsOfferingIdUsersMarkerEmailMarksResponse {
    public String contentType;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingUser[] offeringUsers;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksResponse withOfferingUsers(openapisdk.models.shared.OfferingUser[] offeringUsers) {
        this.offeringUsers = offeringUsers;
        return this;
    }
    public Long statusCode;
    public PostOfferingsOfferingIdUsersMarkerEmailMarksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}