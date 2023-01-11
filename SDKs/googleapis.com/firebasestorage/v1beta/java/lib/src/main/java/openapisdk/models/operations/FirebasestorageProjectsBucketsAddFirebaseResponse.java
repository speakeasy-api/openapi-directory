package openapisdk.models.operations;



public class FirebasestorageProjectsBucketsAddFirebaseResponse {
    public openapisdk.models.shared.Bucket bucket;
    public FirebasestorageProjectsBucketsAddFirebaseResponse withBucket(openapisdk.models.shared.Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    public String contentType;
    public FirebasestorageProjectsBucketsAddFirebaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FirebasestorageProjectsBucketsAddFirebaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}