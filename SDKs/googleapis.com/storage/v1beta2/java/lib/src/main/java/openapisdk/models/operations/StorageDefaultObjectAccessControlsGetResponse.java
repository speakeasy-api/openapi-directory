package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsGetResponse {
    public String contentType;
    public StorageDefaultObjectAccessControlsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControl objectAccessControl;
    public StorageDefaultObjectAccessControlsGetResponse withObjectAccessControl(openapisdk.models.shared.ObjectAccessControl objectAccessControl) {
        this.objectAccessControl = objectAccessControl;
        return this;
    }
    public Long statusCode;
    public StorageDefaultObjectAccessControlsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}