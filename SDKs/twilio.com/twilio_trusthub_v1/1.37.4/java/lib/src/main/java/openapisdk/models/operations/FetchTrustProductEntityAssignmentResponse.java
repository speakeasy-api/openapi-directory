package openapisdk.models.operations;



public class FetchTrustProductEntityAssignmentResponse {
    public String contentType;
    public FetchTrustProductEntityAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchTrustProductEntityAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment trusthubV1TrustProductTrustProductEntityAssignment;
    public FetchTrustProductEntityAssignmentResponse withTrusthubV1TrustProductTrustProductEntityAssignment(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment trusthubV1TrustProductTrustProductEntityAssignment) {
        this.trusthubV1TrustProductTrustProductEntityAssignment = trusthubV1TrustProductTrustProductEntityAssignment;
        return this;
    }
}