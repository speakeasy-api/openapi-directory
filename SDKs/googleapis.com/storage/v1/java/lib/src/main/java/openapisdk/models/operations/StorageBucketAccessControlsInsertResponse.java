package openapisdk.models.operations;



public class StorageBucketAccessControlsInsertResponse {
    public openapisdk.models.shared.BucketAccessControl bucketAccessControl;
    public StorageBucketAccessControlsInsertResponse withBucketAccessControl(openapisdk.models.shared.BucketAccessControl bucketAccessControl) {
        this.bucketAccessControl = bucketAccessControl;
        return this;
    }
    public String contentType;
    public StorageBucketAccessControlsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketAccessControlsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}