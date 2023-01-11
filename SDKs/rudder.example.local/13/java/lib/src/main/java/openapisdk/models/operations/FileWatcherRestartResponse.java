package openapisdk.models.operations;



public class FileWatcherRestartResponse {
    public String contentType;
    public FileWatcherRestartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FileWatcherRestartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public FileWatcherRestart200ApplicationJson fileWatcherRestart200ApplicationJSONObject;
    public FileWatcherRestartResponse withFileWatcherRestart200ApplicationJsonObject(FileWatcherRestart200ApplicationJson fileWatcherRestart200ApplicationJSONObject) {
        this.fileWatcherRestart200ApplicationJSONObject = fileWatcherRestart200ApplicationJSONObject;
        return this;
    }
}