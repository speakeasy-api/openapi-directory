package openapisdk.models.operations;



public class MybusinessverificationsVerificationTokensGenerateResponse {
    public String contentType;
    public MybusinessverificationsVerificationTokensGenerateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateVerificationTokenResponse generateVerificationTokenResponse;
    public MybusinessverificationsVerificationTokensGenerateResponse withGenerateVerificationTokenResponse(openapisdk.models.shared.GenerateVerificationTokenResponse generateVerificationTokenResponse) {
        this.generateVerificationTokenResponse = generateVerificationTokenResponse;
        return this;
    }
    public Long statusCode;
    public MybusinessverificationsVerificationTokensGenerateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}