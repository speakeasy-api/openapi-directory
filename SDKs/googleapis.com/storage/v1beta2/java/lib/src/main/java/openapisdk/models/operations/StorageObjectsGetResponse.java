package openapisdk.models.operations;



public class StorageObjectsGetResponse {
    public String contentType;
    public StorageObjectsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Object object;
    public StorageObjectsGetResponse withObject(openapisdk.models.shared.Object object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public StorageObjectsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}