package openapisdk.models.operations;



public class UpdateVerificationResponse {
    public String contentType;
    public UpdateVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification;
    public UpdateVerificationResponse withVerifyV2ServiceVerification(openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification) {
        this.verifyV2ServiceVerification = verifyV2ServiceVerification;
        return this;
    }
}