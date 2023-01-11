package openapisdk.models.operations;



public class CreateVerificationResponse {
    public String contentType;
    public CreateVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification;
    public CreateVerificationResponse withVerifyV2ServiceVerification(openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification) {
        this.verifyV2ServiceVerification = verifyV2ServiceVerification;
        return this;
    }
}