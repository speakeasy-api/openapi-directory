package openapisdk.models.operations;



public class StorageBucketAccessControlsListResponse {
    public openapisdk.models.shared.BucketAccessControls bucketAccessControls;
    public StorageBucketAccessControlsListResponse withBucketAccessControls(openapisdk.models.shared.BucketAccessControls bucketAccessControls) {
        this.bucketAccessControls = bucketAccessControls;
        return this;
    }
    public String contentType;
    public StorageBucketAccessControlsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageBucketAccessControlsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}