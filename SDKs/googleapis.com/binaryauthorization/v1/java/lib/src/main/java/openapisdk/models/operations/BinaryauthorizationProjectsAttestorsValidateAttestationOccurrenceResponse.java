package openapisdk.models.operations;



public class BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse {
    public String contentType;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidateAttestationOccurrenceResponse validateAttestationOccurrenceResponse;
    public BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse withValidateAttestationOccurrenceResponse(openapisdk.models.shared.ValidateAttestationOccurrenceResponse validateAttestationOccurrenceResponse) {
        this.validateAttestationOccurrenceResponse = validateAttestationOccurrenceResponse;
        return this;
    }
}