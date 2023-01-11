package openapisdk.models.operations;



public class StorageObjectsInsertResponse {
    public String contentType;
    public StorageObjectsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Object object;
    public StorageObjectsInsertResponse withObject(openapisdk.models.shared.Object object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public StorageObjectsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}