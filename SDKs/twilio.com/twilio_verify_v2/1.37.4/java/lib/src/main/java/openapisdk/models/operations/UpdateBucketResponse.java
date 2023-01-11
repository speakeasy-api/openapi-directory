package openapisdk.models.operations;



public class UpdateBucketResponse {
    public String contentType;
    public UpdateBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket;
    public UpdateBucketResponse withVerifyV2ServiceRateLimitBucket(openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket) {
        this.verifyV2ServiceRateLimitBucket = verifyV2ServiceRateLimitBucket;
        return this;
    }
}