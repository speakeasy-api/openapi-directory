package openapisdk.models.operations;



public class StorageBucketAccessControlsGetResponse {
    public openapisdk.models.shared.BucketAccessControl bucketAccessControl;
    public StorageBucketAccessControlsGetResponse withBucketAccessControl(openapisdk.models.shared.BucketAccessControl bucketAccessControl) {
        this.bucketAccessControl = bucketAccessControl;
        return this;
    }
    public String contentType;
    public StorageBucketAccessControlsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketAccessControlsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}