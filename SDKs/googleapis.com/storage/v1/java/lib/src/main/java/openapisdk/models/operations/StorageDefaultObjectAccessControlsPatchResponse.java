package openapisdk.models.operations;



public class StorageDefaultObjectAccessControlsPatchResponse {
    public String contentType;
    public StorageDefaultObjectAccessControlsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ObjectAccessControl objectAccessControl;
    public StorageDefaultObjectAccessControlsPatchResponse withObjectAccessControl(openapisdk.models.shared.ObjectAccessControl objectAccessControl) {
        this.objectAccessControl = objectAccessControl;
        return this;
    }
    public Long statusCode;
    public StorageDefaultObjectAccessControlsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}