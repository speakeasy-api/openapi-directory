package openapisdk.models.operations;



public class FirebasestorageProjectsBucketsGetResponse {
    public openapisdk.models.shared.Bucket bucket;
    public FirebasestorageProjectsBucketsGetResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public FirebasestorageProjectsBucketsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FirebasestorageProjectsBucketsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}