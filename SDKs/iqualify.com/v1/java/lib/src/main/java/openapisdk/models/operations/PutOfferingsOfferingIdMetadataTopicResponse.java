package openapisdk.models.operations;



public class PutOfferingsOfferingIdMetadataTopicResponse {
    public String contentType;
    public PutOfferingsOfferingIdMetadataTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PutOfferingsOfferingIdMetadataTopicResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse;
    public PutOfferingsOfferingIdMetadataTopicResponse withOfferingMetadataResponse(openapisdk.models.shared.OfferingMetadataResponse offeringMetadataResponse) {
        this.offeringMetadataResponse = offeringMetadataResponse;
        return this;
    }
    public Long statusCode;
    public PutOfferingsOfferingIdMetadataTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}