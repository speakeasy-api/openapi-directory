package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsListResponse {
    public String contentType;
    public StorageDefaultObjectAccessControlsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControls objectAccessControls;
    public StorageDefaultObjectAccessControlsListResponse withObjectAccessControls(openapisdk.models.shared.ObjectAccessControls objectAccessControls) {
        this.objectAccessControls = objectAccessControls;
        return this;
    }
    public Long statusCode;
    public StorageDefaultObjectAccessControlsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}