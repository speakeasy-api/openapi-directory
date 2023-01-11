package openapisdk.models.operations;



public class StorageObjectsComposeResponse {
    public String contentType;
    public StorageObjectsComposeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Object object;
    public StorageObjectsComposeResponse withObject(openapisdk.models.shared.Object object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public StorageObjectsComposeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}