package openapisdk.models.operations;



public class DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse {
    public String contentType;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingUser[] offeringUsers;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse withOfferingUsers(openapisdk.models.shared.OfferingUser[] offeringUsers) {
        this.offeringUsers = offeringUsers;
        return this;
    }
    public Long statusCode;
    public DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}