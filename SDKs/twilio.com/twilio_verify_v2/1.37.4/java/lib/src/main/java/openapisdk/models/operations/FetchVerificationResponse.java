package openapisdk.models.operations;



public class FetchVerificationResponse {
    public String contentType;
    public FetchVerificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchVerificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification;
    public FetchVerificationResponse withVerifyV2ServiceVerification(openapisdk.models.shared.VerifyV2ServiceVerification verifyV2ServiceVerification) {
        this.verifyV2ServiceVerification = verifyV2ServiceVerification;
        return this;
    }
}