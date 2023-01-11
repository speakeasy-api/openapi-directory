package openapisdk.models.operations;



public class PostUsersUserEmailOfferingsResponse {
    public String contentType;
    public PostUsersUserEmailOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostUsersUserEmailOfferingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public PostUsersUserEmailOfferingsResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public PostUsersUserEmailOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}