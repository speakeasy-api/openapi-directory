package openapisdk.models.operations;



public class StorageObjectsPatchResponse {
    public String contentType;
    public StorageObjectsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Object object;
    public StorageObjectsPatchResponse withObject(openapisdk.models.shared.Object object) {
        this.object = object;
        return this;
    }
    public Long statusCode;
    public StorageObjectsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}