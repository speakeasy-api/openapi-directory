package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsSocialNotesResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsSocialNotesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsSocialNotesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.SocialNotesResponse[] socialNotesResponses;
    public GetOfferingsOfferingIdAnalyticsSocialNotesResponse withSocialNotesResponses(openapisdk.models.shared.SocialNotesResponse[] socialNotesResponses) {
        this.socialNotesResponses = socialNotesResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsSocialNotesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}