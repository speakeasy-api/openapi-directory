package openapisdk.models.operations;



public class RestoreArchiveResponse {
    public String contentType;
    public RestoreArchiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RestoreArchiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RestoreArchive200ApplicationJson restoreArchive200ApplicationJSONObject;
    public RestoreArchiveResponse withRestoreArchive200ApplicationJsonObject(RestoreArchive200ApplicationJson restoreArchive200ApplicationJSONObject) {
        this.restoreArchive200ApplicationJSONObject = restoreArchive200ApplicationJSONObject;
        return this;
    }
}