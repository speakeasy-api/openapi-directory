package openapisdk.models.operations;



public class StorageBucketsLockRetentionPolicyResponse {
    public openapisdk.models.shared.Bucket bucket;
    public StorageBucketsLockRetentionPolicyResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public StorageBucketsLockRetentionPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsLockRetentionPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}