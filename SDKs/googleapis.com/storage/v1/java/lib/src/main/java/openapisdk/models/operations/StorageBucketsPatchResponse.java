package openapisdk.models.operations;



public class StorageBucketsPatchResponse {
    public openapisdk.models.shared.Bucket bucket;
    public StorageBucketsPatchResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public StorageBucketsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}