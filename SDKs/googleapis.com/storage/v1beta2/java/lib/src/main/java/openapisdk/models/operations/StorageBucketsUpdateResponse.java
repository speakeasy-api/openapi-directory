package openapisdk.models.operations;



public class StorageBucketsUpdateResponse {
    public openapisdk.models.shared.Bucket bucket;
    public StorageBucketsUpdateResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public StorageBucketsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}