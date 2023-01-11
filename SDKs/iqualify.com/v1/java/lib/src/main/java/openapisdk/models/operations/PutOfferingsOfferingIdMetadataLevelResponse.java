package openapisdk.models.operations;



public class PutOfferingsOfferingIdMetadataLevelResponse {
    public String contentType;
    public PutOfferingsOfferingIdMetadataLevelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutOfferingsOfferingIdMetadataLevelResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PutOfferingsOfferingIdMetadataLevelResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PutOfferingsOfferingIdMetadataLevelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}