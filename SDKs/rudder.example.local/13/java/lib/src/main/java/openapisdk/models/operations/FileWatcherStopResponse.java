package openapisdk.models.operations;



public class FileWatcherStopResponse {
    public String contentType;
    public FileWatcherStopResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FileWatcherStopResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FileWatcherStop200ApplicationJson fileWatcherStop200ApplicationJSONObject;
    public FileWatcherStopResponse withFileWatcherStop200ApplicationJsonObject(FileWatcherStop200ApplicationJson fileWatcherStop200ApplicationJSONObject) {
        this.fileWatcherStop200ApplicationJSONObject = fileWatcherStop200ApplicationJSONObject;
        return this;
    }
}