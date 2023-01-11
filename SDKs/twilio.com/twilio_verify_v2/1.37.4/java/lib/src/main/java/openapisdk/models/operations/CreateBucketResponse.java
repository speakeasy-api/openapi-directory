package openapisdk.models.operations;



public class CreateBucketResponse {
    public String contentType;
    public CreateBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket;
    public CreateBucketResponse withVerifyV2ServiceRateLimitBucket(openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket) {
        this.verifyV2ServiceRateLimitBucket = verifyV2ServiceRateLimitBucket;
        return this;
    }
}