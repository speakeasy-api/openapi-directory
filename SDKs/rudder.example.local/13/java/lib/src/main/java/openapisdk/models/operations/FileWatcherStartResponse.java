package openapisdk.models.operations;



public class FileWatcherStartResponse {
    public String contentType;
    public FileWatcherStartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FileWatcherStartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FileWatcherStart200ApplicationJson fileWatcherStart200ApplicationJSONObject;
    public FileWatcherStartResponse withFileWatcherStart200ApplicationJsonObject(FileWatcherStart200ApplicationJson fileWatcherStart200ApplicationJSONObject) {
        this.fileWatcherStart200ApplicationJSONObject = fileWatcherStart200ApplicationJSONObject;
        return this;
    }
}