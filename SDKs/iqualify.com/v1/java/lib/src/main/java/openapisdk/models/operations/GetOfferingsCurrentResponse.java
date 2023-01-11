package openapisdk.models.operations;



public class GetOfferingsCurrentResponse {
    public String contentType;
    public GetOfferingsCurrentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsCurrentResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public GetOfferingsCurrentResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsCurrentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}