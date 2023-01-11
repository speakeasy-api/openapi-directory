package openapisdk.models.operations;



public class CreateRateLimitResponse {
    public String contentType;
    public CreateRateLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRateLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit;
    public CreateRateLimitResponse withVerifyV2ServiceRateLimit(openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit) {
        this.verifyV2ServiceRateLimit = verifyV2ServiceRateLimit;
        return this;
    }
}