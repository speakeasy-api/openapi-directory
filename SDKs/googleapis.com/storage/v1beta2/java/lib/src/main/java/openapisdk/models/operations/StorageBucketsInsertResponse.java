package openapisdk.models.operations;



public class StorageBucketsInsertResponse {
    public openapisdk.models.shared.Bucket bucket;
    public StorageBucketsInsertResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public StorageBucketsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}