package openapisdk.models.operations;



public class CreateTrustProductEntityAssignmentResponse {
    public String contentType;
    public CreateTrustProductEntityAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTrustProductEntityAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment trusthubV1TrustProductTrustProductEntityAssignment;
    public CreateTrustProductEntityAssignmentResponse withTrusthubV1TrustProductTrustProductEntityAssignment(openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment trusthubV1TrustProductTrustProductEntityAssignment) {
        this.trusthubV1TrustProductTrustProductEntityAssignment = trusthubV1TrustProductTrustProductEntityAssignment;
        return this;
    }
}