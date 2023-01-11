package openapisdk.models.operations;



public class PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse {
    public openapisdk.models.shared.AwardedResponse awardedResponse;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse withAwardedResponse(openapisdk.models.shared.AwardedResponse awardedResponse) {
        this.awardedResponse = awardedResponse;
        return this;
    }
    public String contentType;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}