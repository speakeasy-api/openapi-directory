package openapisdk.models.operations;



public class PatchOfferingsOfferingIdResponse {
    public String contentType;
    public PatchOfferingsOfferingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchOfferingsOfferingIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PatchOfferingsOfferingIdResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PatchOfferingsOfferingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}