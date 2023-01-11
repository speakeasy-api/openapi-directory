package openapisdk.models.operations;



public class StorageObjectAccessControlsGetResponse {
    public String contentType;
    public StorageObjectAccessControlsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControl objectAccessControl;
    public StorageObjectAccessControlsGetResponse withObjectAccessControl(openapisdk.models.shared.ObjectAccessControl objectAccessControl) {
        this.objectAccessControl = objectAccessControl;
        return this;
    }
    public Long statusCode;
    public StorageObjectAccessControlsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}