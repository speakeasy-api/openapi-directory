package openapisdk.models.operations;



public class GetOfferingsFutureResponse {
    public String contentType;
    public GetOfferingsFutureResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsFutureResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses;
    public GetOfferingsFutureResponse withOfferingMetadataResponses(openapisdk.models.shared.OfferingMetadataResponse[] offeringMetadataResponses) {
        this.offeringMetadataResponses = offeringMetadataResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsFutureResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}