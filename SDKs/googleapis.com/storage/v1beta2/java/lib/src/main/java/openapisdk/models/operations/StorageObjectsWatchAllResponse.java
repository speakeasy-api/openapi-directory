package openapisdk.models.operations;



public class StorageObjectsWatchAllResponse {
    public openapisdk.models.shared.Channel channel;
    public StorageObjectsWatchAllResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public StorageObjectsWatchAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StorageObjectsWatchAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}