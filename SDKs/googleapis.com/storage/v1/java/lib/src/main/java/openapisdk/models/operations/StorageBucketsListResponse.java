package openapisdk.models.operations;



public class StorageBucketsListResponse {
    public openapisdk.models.shared.Buckets buckets;
    public StorageBucketsListResponse withBuckets(openapisdk.models.shared.Buckets buckets) {
        this.buckets = buckets;
        return this;
    }
    public String contentType;
    public StorageBucketsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}