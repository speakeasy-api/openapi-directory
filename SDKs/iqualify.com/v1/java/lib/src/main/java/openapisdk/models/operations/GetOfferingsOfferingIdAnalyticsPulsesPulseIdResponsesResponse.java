package openapisdk.models.operations;



public class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse {
    public String contentType;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PulseResponse[] pulseResponses;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse withPulseResponses(openapisdk.models.shared.PulseResponse[] pulseResponses) {
        this.pulseResponses = pulseResponses;
        return this;
    }
    public Long statusCode;
    public GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}