package openapisdk.models.operations;



public class CreateTrustProductChannelEndpointAssignmentResponse {
    public String contentType;
    public CreateTrustProductChannelEndpointAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrustProductChannelEndpointAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment trusthubV1TrustProductTrustProductChannelEndpointAssignment;
    public CreateTrustProductChannelEndpointAssignmentResponse withTrusthubV1TrustProductTrustProductChannelEndpointAssignment(openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment trusthubV1TrustProductTrustProductChannelEndpointAssignment) {
        this.trusthubV1TrustProductTrustProductChannelEndpointAssignment = trusthubV1TrustProductTrustProductChannelEndpointAssignment;
        return this;
    }
}