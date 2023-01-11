package openapisdk.models.operations;



public class PutOfferingsOfferingIdMetadataCategoryResponse {
    public String contentType;
    public PutOfferingsOfferingIdMetadataCategoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutOfferingsOfferingIdMetadataCategoryResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PutOfferingsOfferingIdMetadataCategoryResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PutOfferingsOfferingIdMetadataCategoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}