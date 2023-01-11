package openapisdk.models.operations;



public class StorageBucketAccessControlsUpdateResponse {
    public openapisdk.models.shared.BucketAccessControl bucketAccessControl;
    public StorageBucketAccessControlsUpdateResponse withBucketAccessControl(openapisdk.models.shared.BucketAccessControl bucketAccessControl) {
        this.bucketAccessControl = bucketAccessControl;
        return this;
    }
    public String contentType;
    public StorageBucketAccessControlsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketAccessControlsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}