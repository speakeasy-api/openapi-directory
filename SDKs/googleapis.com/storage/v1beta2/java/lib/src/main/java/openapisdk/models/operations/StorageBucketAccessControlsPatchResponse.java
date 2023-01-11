package openapisdk.models.operations;



public class StorageBucketAccessControlsPatchResponse {
    public openapisdk.models.shared.BucketAccessControl bucketAccessControl;
    public StorageBucketAccessControlsPatchResponse withBucketAccessControl(openapisdk.models.shared.BucketAccessControl bucketAccessControl) {
        this.bucketAccessControl = bucketAccessControl;
        return this;
    }
    public String contentType;
    public StorageBucketAccessControlsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketAccessControlsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}