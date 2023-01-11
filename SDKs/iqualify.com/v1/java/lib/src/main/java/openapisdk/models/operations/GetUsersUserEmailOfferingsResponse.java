package openapisdk.models.operations;



public class GetUsersUserEmailOfferingsResponse {
    public String contentType;
    public GetUsersUserEmailOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetUsersUserEmailOfferingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public GetUsersUserEmailOfferingsResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public GetUsersUserEmailOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}