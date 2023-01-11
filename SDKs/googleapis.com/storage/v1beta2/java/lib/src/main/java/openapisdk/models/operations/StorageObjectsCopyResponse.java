package openapisdk.models.operations;



public class StorageObjectsCopyResponse {
    public String contentType;
    public StorageObjectsCopyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Object object;
    public StorageObjectsCopyResponse withObject(openapisdk.models.shared.Object object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public StorageObjectsCopyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}