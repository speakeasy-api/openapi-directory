package openapisdk.models.operations;



public class FetchRateLimitResponse {
    public String contentType;
    public FetchRateLimitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRateLimitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit;
    public FetchRateLimitResponse withVerifyV2ServiceRateLimit(openapisdk.models.shared.VerifyV2ServiceRateLimit verifyV2ServiceRateLimit) {
        this.verifyV2ServiceRateLimit = verifyV2ServiceRateLimit;
        return this;
    }
}