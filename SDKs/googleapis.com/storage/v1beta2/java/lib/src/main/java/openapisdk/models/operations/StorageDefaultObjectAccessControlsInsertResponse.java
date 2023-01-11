package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsInsertResponse {
    public String contentType;
    public StorageDefaultObjectAccessControlsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControl objectAccessControl;
    public StorageDefaultObjectAccessControlsInsertResponse withObjectAccessControl(openapisdk.models.shared.ObjectAccessControl objectAccessControl) {
        this.objectAccessControl = objectAccessControl;
        return this;
    }
    public Long statusCode;
    public StorageDefaultObjectAccessControlsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}