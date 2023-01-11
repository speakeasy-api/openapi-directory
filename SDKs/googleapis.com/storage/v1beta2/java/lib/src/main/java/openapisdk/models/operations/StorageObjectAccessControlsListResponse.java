package openapisdk.models.operations;



public class StorageObjectAccessControlsListResponse {
    public String contentType;
    public StorageObjectAccessControlsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControls objectAccessControls;
    public StorageObjectAccessControlsListResponse withObjectAccessControls(openapisdk.models.shared.ObjectAccessControls objectAccessControls) {
        this.objectAccessControls = objectAccessControls;
        return this;
    }
    public Long statusCode;
    public StorageObjectAccessControlsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}