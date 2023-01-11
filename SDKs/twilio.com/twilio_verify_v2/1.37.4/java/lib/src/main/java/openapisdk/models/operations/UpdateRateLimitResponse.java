package openapisdk.models.operations;



public class UpdateRateLimitResponse {
    public String contentType;
    public UpdateRateLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRateLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit;
    public UpdateRateLimitResponse withVerifyV2ServiceRateLimit(openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit) {
        this.verifyV2ServiceRateLimit = verifyV2ServiceRateLimit;
        return this;
    }
}