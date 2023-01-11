package openapisdk.models.operations;



public class DriveFilesWatchResponse {
    public openapisdk.models.shared.Channel channel;
    public DriveFilesWatchResponse withChannel(openapisdk.models.shared.Channel channel) {
        this.channel = channel;
        return this;
    }
    public String contentType;
    public DriveFilesWatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DriveFilesWatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}