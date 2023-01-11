package openapisdk.models.operations;



public class FetchTrustProductChannelEndpointAssignmentResponse {
    public String contentType;
    public FetchTrustProductChannelEndpointAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrustProductChannelEndpointAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment trusthubV1TrustProductTrustProductChannelEndpointAssignment;
    public FetchTrustProductChannelEndpointAssignmentResponse withTrusthubV1TrustProductTrustProductChannelEndpointAssignment(openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment trusthubV1TrustProductTrustProductChannelEndpointAssignment) {
        this.trusthubV1TrustProductTrustProductChannelEndpointAssignment = trusthubV1TrustProductTrustProductChannelEndpointAssignment;
        return this;
    }
}