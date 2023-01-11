package openapisdk.models.operations;



public class CreateArchiveResponse {
    public String contentType;
    public CreateArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateArchive200ApplicationJson createArchive200ApplicationJSONObject;
    public CreateArchiveResponse withCreateArchive200ApplicationJsonObject(CreateArchive200ApplicationJson createArchive200ApplicationJSONObject) {
        this.createArchive200ApplicationJSONObject = createArchive200ApplicationJSONObject;
        return this;
    }
}