package openapisdk.models.operations;



public class GetOfferingsPastResponse {
    public String contentType;
    public GetOfferingsPastResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsPastResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public GetOfferingsPastResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsPastResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}