package openapisdk.models.operations;



public class CreateVerificationCheckResponse {
    public String contentType;
    public CreateVerificationCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVerificationCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceVerificationCheck verifyV2ServiceVerificationCheck;
    public CreateVerificationCheckResponse withVerifyV2ServiceVerificationCheck(openapisdk.models.shared.VerifyV2ServiceVerificationCheck verifyV2ServiceVerificationCheck) {
        this.verifyV2ServiceVerificationCheck = verifyV2ServiceVerificationCheck;
        return this;
    }
}