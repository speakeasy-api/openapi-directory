package openapisdk.models.operations;



public class FetchBucketResponse {
    public String contentType;
    public FetchBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket;
    public FetchBucketResponse withVerifyV2ServiceRateLimitBucket(openapisdk.models.shared.VerifyV2ServiceRateLimitBucket verifyV2ServiceRateLimitBucket) {
        this.verifyV2ServiceRateLimitBucket = verifyV2ServiceRateLimitBucket;
        return this;
    }
}