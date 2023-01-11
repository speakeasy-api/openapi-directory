package openapisdk.models.operations;



public class StorageObjectsListResponse {
    public String contentType;
    public StorageObjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Objects objects;
    public StorageObjectsListResponse withObjects(openapisdk.models.shared.Objects objects) {
        this.objects = objects;
        return this;
    }
    public Long statusCode;
    public StorageObjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}