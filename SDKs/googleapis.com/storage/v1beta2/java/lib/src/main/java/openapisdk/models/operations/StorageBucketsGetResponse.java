package openapisdk.models.operations;



public class StorageBucketsGetResponse {
    public openapisdk.models.shared.Bucket bucket;
    public StorageBucketsGetResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public StorageBucketsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}