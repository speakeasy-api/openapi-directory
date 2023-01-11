package openapisdk.models.operations;



public class GetOfferingsResponse {
    public String contentType;
    public GetOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public GetOfferingsResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}