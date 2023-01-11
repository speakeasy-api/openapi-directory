package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsUpdateResponse {
    public String contentType;
    public StorageDefaultObjectAccessControlsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControl objectAccessControl;
    public StorageDefaultObjectAccessControlsUpdateResponse withObjectAccessControl(openapisdk.models.shared.ObjectAccessControl objectAccessControl) {
        this.objectAccessControl = objectAccessControl;
        return this;
    }
    public Long statusCode;
    public StorageDefaultObjectAccessControlsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}