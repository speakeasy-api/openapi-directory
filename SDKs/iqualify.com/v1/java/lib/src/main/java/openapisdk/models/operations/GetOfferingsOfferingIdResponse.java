package openapisdk.models.operations;



public class GetOfferingsOfferingIdResponse {
    public String contentType;
    public GetOfferingsOfferingIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public GetOfferingsOfferingIdResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}