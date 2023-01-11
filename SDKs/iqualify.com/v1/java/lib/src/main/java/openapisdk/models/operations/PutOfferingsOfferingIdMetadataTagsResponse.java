package openapisdk.models.operations;



public class PutOfferingsOfferingIdMetadataTagsResponse {
    public String contentType;
    public PutOfferingsOfferingIdMetadataTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutOfferingsOfferingIdMetadataTagsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PutOfferingsOfferingIdMetadataTagsResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PutOfferingsOfferingIdMetadataTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}