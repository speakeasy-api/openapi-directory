package openapisdk.models.operations;



public class PostOfferingsResponse {
    public String contentType;
    public PostOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostOfferingsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PostOfferingsResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PostOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}